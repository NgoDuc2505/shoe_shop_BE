import express from 'express';
import { handleAddNewShoe, handleGetShoeList, handleGetShoeBrand, handleGetShoeByBrand, handleGetShoeByID, handleGetShoesByName, handleGetShoeCategory, handleGetShoeByCategory, handleUpdateShoe, handleDeleteShoe, handleGetDeleteShoe } from '../controllers/shoe.controller.js';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

//*/api/shoe/get-shoe-list
router.get(process.env.GET_SHOE_URL, handleGetShoeList);
//*/api/shoe/add-shoe
router.post(process.env.ADD_SHOE_URL, handleAddNewShoe);
//*/api/shoe/get-brand-list
router.get(process.env.GET_BRAND, handleGetShoeBrand);
// */api/shoe/get-shoe-by-brand/:brandName
router.get(process.env.GET_LIST_SHOE_BY_BRAND, handleGetShoeByBrand);
// */api/shoe/get-shoe-by-id/:id
router.get(process.env.GET_SHOE_BY_ID_URL, handleGetShoeByID);
// */api/shoe/get-shoe-by-name/:name
router.get(process.env.GET_SHOES_BY_NAME, handleGetShoesByName);
// */api/shoe/get-category-list
router.get(process.env.GET_CATEGORY, handleGetShoeCategory);
// */api/shoe/get-shoe-by-category/:categoryName
router.get(process.env.GET_SHOES_BY_CATEGORY, handleGetShoeByCategory);
// */api/shoe/delete-shoe/:id
router.delete(process.env.DELETE_SHOE, handleDeleteShoe);
// */api/shoe/get-delete-shoe/:id
router.get(process.env.GET_DELETE_SHOE, handleGetDeleteShoe);

// */api/shoe/get-delete-shoe-list
router.put(process.env.UPDATE_SHOE, handleUpdateShoe);

export default router;