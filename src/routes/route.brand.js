import express from "express";
import dotenv from "dotenv";
import { handleGetBrandListCollection } from "../controllers/brand.controller.js";
dotenv.config();
const router = express.Router();

//* /api/shoe/get-brand-list-collection
router.get(process.env.GET_BRAND_LIST_COLLECTION, handleGetBrandListCollection);

export default router;
