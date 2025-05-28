import dotenv from "dotenv";
import { connectDB } from "../config/config.js";
import { ObjectId } from "bson";

dotenv.config();
let db = null;
(async () => {
  db = await connectDB();
})();

export const getShoeList = async (req, res) => {
  try {
    const shoes_list = await db
      .collection(process.env.DB_SHOE_COLLECTION)
      .find()
      .toArray();
    return shoes_list.filter((shoe) => !shoe.isDel);
  } catch (error) {
    return res.status(500).json({ error: "Error fetching shoes" });
  }
};

export const addNewShoe = async (req, res) => {
  try {
    const newShoe = req.body;
    const result = await db
      .collection(process.env.DB_SHOE_COLLECTION)
      .insertOne(newShoe);
    return result;
  } catch (error) {
    return res.status(500).json({ error: "Error adding shoe" });
  }
};

export const updateShoe = async (req, res) => {
  try {
    const shoeId = req.params.id;
    const updatedShoe = req.body;
    const result = await db
      .collection(process.env.DB_SHOE_COLLECTION)
      .updateOne({ _id: new ObjectId(shoeId) }, { $set: { ...updatedShoe } });
    if (result.matchedCount === 0) {
      return null;
    }
    return result;
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Error updating shoe [Invalid parameter]",
      errorLog: error,
    });
  }
};

export const findShoeByID = async (req, res) => {
  try {
    const shoeId = req.params.id;
    const result = await db
      .collection(process.env.DB_SHOE_COLLECTION)
      .findOne({ _id: new ObjectId(shoeId) });
    if (result) {
      return result;
    } else {
      return null;
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error finding shoe by ID [Invalid parameter]" });
  }
};

export const deleteShoe = async (req, res) => {
  try {
    const shoeId = req.params.id;
    const result = await db
      .collection(process.env.DB_SHOE_COLLECTION)
      .updateOne(
        { _id: new ObjectId(shoeId) },
        { $set: { isDel: true, dayDel: new Date().toISOString() } },
      );
    if (result.matchedCount === 0) {
      return null;
    }
    return result;
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error deleting shoe [Invalid parameter]" });
  }
};

const deleteShoeWithQuantity = async (shoeId) => {
  try {
    const result = await db
      .collection(process.env.DB_SHOE_COLLECTION)
      .updateOne(
        { _id: new ObjectId(shoeId) },
        { $set: { isDel: true, dayDel: new Date().toISOString() } },
      );
    if (result.matchedCount === 0) {
      return null;
    }
    return result;
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error deleting shoe [Invalid parameter]" });
  }
};

export const getDeletedShoe = async (req, res) => {
  try {
    const shoes_list = await db
      .collection(process.env.DB_SHOE_COLLECTION)
      .find({ isDel: true })
      .toArray();
    return shoes_list;
  } catch (error) {
    return res.status(500).json({ error: "Error fetching deleted shoes" });
  }
};

export const updateQuantity = async (shoeId, quantity) => {
  try {
    let result = null;
    if (quantity == 0) {
      result = await deleteShoeWithQuantity(shoeId);
    } else {
      result = await db
        .collection(process.env.DB_SHOE_COLLECTION)
        .updateOne(
          { _id: new ObjectId(shoeId) },
          { $set: { quantity: quantity } },
        );
      if (result.matchedCount === 0) {
        return null;
      }
    }
    return { result, quantity: quantity };
  } catch (error) {
    return res.status(500).json({ error: "Error updating quantity" });
  }
};
