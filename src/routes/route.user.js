import express from "express";
import dotenv from "dotenv";
import { handleGetUserList, handleLogin, handlePostUseruserOrderHistory, handleSignIn, handleVerifyEmailLogin, hanleGetUserOrderHistory } from "../controllers/user.controller.js";
import { addRouteToListWithBaseURL } from "../config/utils.js";
dotenv.config();
const routeListUser = ["====USER API===="];
const baseEndPoint = process.env.USER_BASE_URL;
const router = express.Router();

// /api/user/get-user-list
router.get(process.env.GET_USER_LIST, handleGetUserList);
routeListUser.push(
  addRouteToListWithBaseURL("GET", process.env.GET_USER_LIST, baseEndPoint),
);

// /api/user/verify-email/:token
router.get(process.env.GET_VERIFY_EMAIL, handleVerifyEmailLogin);
routeListUser.push(
  addRouteToListWithBaseURL("GET", process.env.GET_VERIFY_EMAIL, baseEndPoint),
);
// /api/user/sign-in 
router.post(process.env.POST_SIGN_IN, handleSignIn);
routeListUser.push(
  addRouteToListWithBaseURL("POST", process.env.POST_SIGN_IN, baseEndPoint),
);

// /api/user/login
router.post(process.env.POST_LOGIN, handleLogin);
routeListUser.push(
  addRouteToListWithBaseURL("POST", process.env.POST_LOGIN, baseEndPoint),
);

// /api/user/order-history
router.post(process.env.POST_ORDER_HISTORY, handlePostUseruserOrderHistory);
routeListUser.push(
  addRouteToListWithBaseURL("POST", process.env.POST_ORDER_HISTORY, baseEndPoint),
);

// /api/user/get-order-user/:userId
router.get(process.env.GET_USER_ORDER_HISTORY, hanleGetUserOrderHistory);
routeListUser.push(
  addRouteToListWithBaseURL("GET", process.env.GET_USER_ORDER_HISTORY, baseEndPoint),
);

console.log(routeListUser);
export default router;
export { routeListUser };