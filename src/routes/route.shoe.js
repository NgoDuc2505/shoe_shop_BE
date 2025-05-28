import express from "express";
import {
  handleAddNewShoe,
  handleGetShoeList,
  handleGetShoeBrand,
  handleGetShoeByBrand,
  handleGetShoeByID,
  handleGetShoesByName,
  handleGetShoeCategory,
  handleGetShoeByCategory,
  handleUpdateShoe,
  handleDeleteShoe,
  handleGetDeleteShoe,
} from "../controllers/shoe.controller.js";
import dotenv from "dotenv";
import { addRouteToList } from "../config/utils.js";
dotenv.config();

const router = express.Router();
const routeList = ["====SHOE API===="];

//*/api/shoe/get-shoe-list
router.get(process.env.GET_SHOE_URL, handleGetShoeList);
routeList.push(addRouteToList("GET", process.env.GET_SHOE_URL));

//*/api/shoe/add-shoe
router.post(process.env.ADD_SHOE_URL, handleAddNewShoe);
routeList.push(addRouteToList("POST", process.env.ADD_SHOE_URL));

//*/api/shoe/get-brand-list
router.get(process.env.GET_BRAND, handleGetShoeBrand);
routeList.push(addRouteToList("GET", process.env.GET_BRAND));

// */api/shoe/get-shoe-by-brand/:brandName
router.get(process.env.GET_LIST_SHOE_BY_BRAND, handleGetShoeByBrand);
routeList.push(addRouteToList("GET", process.env.GET_LIST_SHOE_BY_BRAND));

// */api/shoe/get-shoe-by-id/:id
router.get(process.env.GET_SHOE_BY_ID_URL, handleGetShoeByID);
routeList.push(addRouteToList("GET", process.env.GET_SHOE_BY_ID_URL));

// */api/shoe/get-shoe-by-name/:name
router.get(process.env.GET_SHOES_BY_NAME, handleGetShoesByName);
routeList.push(addRouteToList("GET", process.env.GET_SHOES_BY_NAME));

// */api/shoe/get-category-list
router.get(process.env.GET_CATEGORY, handleGetShoeCategory);
routeList.push(addRouteToList("GET", process.env.GET_CATEGORY));

// */api/shoe/get-shoe-by-category/:categoryName
router.get(process.env.GET_SHOES_BY_CATEGORY, handleGetShoeByCategory);
routeList.push(addRouteToList("GET", process.env.GET_SHOES_BY_CATEGORY));

// */api/shoe/delete-shoe/:id
router.delete(process.env.DELETE_SHOE, handleDeleteShoe);
routeList.push(addRouteToList("DELETE", process.env.DELETE_SHOE));

// */api/shoe/get-delete-shoe-list
router.get(process.env.GET_DELETE_SHOE, handleGetDeleteShoe);
routeList.push(addRouteToList("GET", process.env.GET_DELETE_SHOE));

// */api/shoe/get-delete-shoe-list
router.put(process.env.UPDATE_SHOE, handleUpdateShoe);
routeList.push(addRouteToList("PUT", process.env.UPDATE_SHOE));

export default router;
export { routeList };
