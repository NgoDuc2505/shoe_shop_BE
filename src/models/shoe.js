import dotenv from 'dotenv';
import { connectDB } from '../config/config.js';

dotenv.config();
let db = null;
(async()=>{
    db = await connectDB();
})()

export const getShoeList = async (req, res) => {
    try {
      return await db.collection(process.env.DB_SHOE_COLLECTION).find().toArray();
    } catch (error) {
      return res.status(500).json({ error: "Error fetching shoes" });
    }
}

export const addNewShoe = async (req, res) => {
    try{
        const newShoe = req.body;
        const result = await db.collection(process.env.DB_SHOE_COLLECTION).insertOne(newShoe);
        return result;
    }catch(error){
        return res.status(500).json({ error: "Error adding shoe" });
    }
}