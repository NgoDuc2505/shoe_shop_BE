import express from 'express';
import { handleAddNewShoe, handleGetShoeList } from '../controllers/shoe.controller.js';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

//*/api/shoe/get-shoe-list
router.get(process.env.GET_SHOE_URL, handleGetShoeList);
//*/api/shoe/add-shoe
router.post(process.env.ADD_SHOE_URL, handleAddNewShoe);


export default router;