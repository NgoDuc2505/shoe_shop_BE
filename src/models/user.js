import dotenv from "dotenv";
import { connectDB } from "../config/config.js";
import { ObjectId } from "bson";
import bcrypt from "bcrypt";
import { emailRegex, passwordRegex, saltRounds } from "../utils/index.js";
import crypto from "crypto";
import {
  sendMailVerification,
  sendMailVerification_V2,
} from "../utils/mailer.js";
import jwt from "jsonwebtoken";
import { getShoeList, updateQuantity } from "./shoe.js";
import { errorResponse } from "../config/response.js";

dotenv.config();
let db = null;
(async () => {
  db = await connectDB();
})();

const isObjectEmpty = (objectName) => {
  return Object.keys(objectName).length === 0;
};

const validationUser = (email, password) => {
  const error = {};
  let isValid = true;
  if (!email) {
    error.email = "Email is required";
    isValid = false;
  }
  if (!password) {
    error.password = "Password is required";
    isValid = false;
  }
  if (isObjectEmpty(error)) {
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = passwordRegex.test(password);
    if (!isValidEmail) {
      error.email = "Invalid email format";
      isValid = false;
    }
    if (!isValidPassword) {
      error.password =
        "Password must be at least 6 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character";
      isValid = false;
    }
  }
  return { isValid, error };
};

const getUserList = async (req, res) => {
  try {
    const userList = await db
      .collection(process.env.DB_USER_COLLECTION)
      .find()
      .toArray();
    return userList.filter((user) => !user.isDel);
  } catch (error) {
    return res.status(500).json({ error: "Error fetching users" });
  }
};

const findUserByEmail = async (email) => {
  try {
    const user = await db
      .collection(process.env.DB_USER_COLLECTION)
      .findOne({ email });
    return user;
  } catch (error) {
    return null;
  }
};

const addNewUser = async (req, res) => {
  try {
    const { email, password, name, age } = req.body;

    const { isValid, error } = validationUser(email, password);
    if (!isValid) {
      return { user: null, error };
    }

    const isExistingUser = await findUserByEmail(email);
    if (isExistingUser) {
      return { user: null, error: "Email already exists" };
    }

    const roleID = 0;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const verificationUrl = `http://localhost:8080/api/user/verify-email/${verificationToken}`;

    const newUser = {
      name,
      age,
      email,
      password: hashedPassword,
      tier: 0,
      role: roleID,
      orderHistory: [],
      isBlocked: false,
      verificationToken,
      isVerified: false,
    };

    const result = await db
      .collection(process.env.DB_USER_COLLECTION)
      .insertOne(newUser);

    // await sendMailVerification(email, verificationUrl);
    await sendMailVerification_V2(email, verificationUrl);
    return { user: result, error: null };
  } catch (error) {
    return { user: null, error };
  }
};

const verificationToken = async (req, res) => {
  try {
    const { token } = req.params;
    const user = await db
      .collection(process.env.DB_USER_COLLECTION)
      .findOne({ verificationToken: token });
    if (!user) {
      return {
        isSuccess: false,
        message: "Bạn đã xác minh xong, vui lòng bỏ qua email này.",
      };
    }
    await db
      .collection(process.env.DB_USER_COLLECTION)
      .updateOne(
        { verificationToken: token },
        { $set: { isVerified: true, verificationToken: null } },
      );
    return {
      isSuccess: true,
      message: "Thành công xác minh thông qua email",
    };
  } catch (error) {
    console.error("Error token:", error);
    return res.status(500).json({ error: "Error verifying email" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (!user) {
      return { user: null, error: "Email không hợp lệ!" };
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return { user: null, error: "Mật khẩu không đúng!" };
    }

    if (user.isBlocked) {
      return { user: null, error: "Tài khoản đang bị chặn trên hệ thốngthống" };
    }

    if (user.isVerified === false) {
      return {
        user: null,
        error:
          "Tài khoản chưa được xác minh, vui lòng kiểm tra email để xác minh trước khi đăng nhập.",
      };
    }

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        roleID: user.role,
        verify: user.isVerified,
        blocked: user.isBlocked,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN || "1h",
      },
    );

    return { user: { data: user, accessToken: token }, error: null };
  } catch (error) {
    return { user: null, error: { error, res } };
  }
};

const totalPrice = (orderList) => {
  let total = 0;
  orderList.forEach((items) => {
    total += items.price * items.quantity;
  });
  return total;
};

const userOrderHistory = async (req, res) => {
  try {
    //orderList: [{shoeId, quantity, name, price}]
    const { userId, orderList } = req.body;
    const total = totalPrice(orderList);
    const user = await db
      .collection(process.env.DB_USER_COLLECTION)
      .findOne({ _id: new ObjectId(userId) });
    if (!user) {
      return { user: null, error: "User not found" };
    }

    const newOrder = {
      orderList,
      totalPrice: total,
      userId: user._id,
      dayCreated: new Date(),
    };

    // await db
    //   .collection(process.env.DB_ORDER_COLLECTION)
    //   .insertOne(newOrder);

    await db
      .collection(process.env.DB_USER_COLLECTION)
      .updateOne(
        { _id: new ObjectId(userId) },
        { $push: { orderHistory: newOrder } },
      );

    const shoeList = await getShoeList();
    orderList.forEach(async (orderItem) => {
      const shoe = shoeList.find(
        (shoe) => shoe._id.toString() === orderItem.shoeId,
      );
      const rs_update = await updateQuantity(
        orderItem.shoeId,
        shoe.quantity - orderItem.quantity,
      );
      if (!shoe) {
        console.log("Shoe not found: ", orderItem.shoeId);
      }
      console.log("Shoe quantity updated: ", {
        qtt: shoe.quantity - orderItem.quantity,
        rs_update,
      });
    });

    return { newOrder: newOrder, error: null };
  } catch (error) {
    console.error("Error userOrderHistory:", error);
    return { newOrder: null, error: error };
  }
};

const getUserByID = async (userId) => {
  try{
    const user = await db
      .collection(process.env.DB_USER_COLLECTION)
      .findOne({ _id: new ObjectId(userId) });
    return user;
  } catch (error) {
    return null;
  }
}

const getUsetOrderHistoryByUserID = async (req, res) => {
  try {
    const { userId } = req.params;
    const findedUser = await getUserByID(userId);

    if (!findedUser) {
      return { result: null, error: "User not found" };
    }

    return { result: findedUser.orderHistory, error: null };

  } catch (error) {
    return {result: null, error}
  }
};

export {
  getUserList,
  addNewUser,
  verificationToken,
  login,
  userOrderHistory,
  getUsetOrderHistoryByUserID,
};
