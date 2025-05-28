import {
  errorResponse,
  invalidData,
  sendHTMLForm,
  successResponse,
} from "../config/response.js";
import {
  addNewUser,
  getUserList,
  login,
  verificationToken,
  userOrderHistory,
  getUsetOrderHistoryByUserID
} from "../models/user.js";

const handleGetUserList = async (req, res) => {
  try {
    const userList = await getUserList(req, res);
    successResponse(res, userList, "User list fetched successfully");
  } catch (error) {
    errorResponse(res, error, "Error fetching user list");
  }
};

const handleVerifyEmailLogin = async (req, res) => {
  try {
    const { isSuccess, message } = await verificationToken(req, res);
    if (isSuccess) {
      return successResponse(res, isSuccess, message);
    }
    return sendHTMLForm(res);
    // errorResponse(res, isSuccess, message);
  } catch (error) {
    errorResponse(res, error, "Error verifying email login");
  }
};

const handleSignIn = async (req, res) => {
  try {
    const { user, error } = await addNewUser(req, res);
    if (error) {
      return errorResponse(res, error, "Error signing in user");
    }
    successResponse(res, user, "Login successful");
  } catch (error) {
    errorResponse(res, error, "Error during login");
  }
};

const handleLogin = async (req, res) => {
  try {
    const { user, error } = await login(req, res);
    if (error) {
      return invalidData(res, error);
    }
    successResponse(res, user, "Login successful");
  } catch (error) {
    errorResponse(res, error, "Error during login");
  }
};

const handlePostUseruserOrderHistory = async (req,res) =>{
  try{
    //orderHistory: {newOrder, error}
    const order = await userOrderHistory(req,res);
    if(order.error){
      errorResponse(res, order.error, "Error during user order phase!!!");
    }
    successResponse(res, order.newOrder, "Order history created successfully");
  }catch(error){
    errorResponse(res, error, "Error during user order history");
  }
}

const hanleGetUserOrderHistory = async (req,res) =>{
  try{
    const {result, error} = await getUsetOrderHistoryByUserID(req,res);
    if(error){
      errorResponse(res, error, "Error during get user order history");
    }
    successResponse(res, result, "User order history fetched successfully");
  }catch(error){
    errorResponse(res, error, "Error during get user order history");
  }
}

export { handleGetUserList, handleVerifyEmailLogin, handleSignIn, handleLogin, handlePostUseruserOrderHistory, hanleGetUserOrderHistory };
