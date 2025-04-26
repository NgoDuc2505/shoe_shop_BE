import dotenv from 'dotenv';
import { connectDB } from '../config/config.js';

dotenv.config();
let db = null;
(async () => {
    db = await connectDB();
})()

const getBrandList = async (req, res) => {
    try {
        return await db.collection(process.env.DB_BRAND_COLLECTION).find().toArray();
    } catch (error) {
        return res.status(500).json({ error: "Error fetching brands" });
    }
}


export {getBrandList}