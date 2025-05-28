import {
  successResponse,
  errorResponse,
  invalidData,
} from "../config/response.js";
import { getBrandList } from "../models/brand.js";

const handleGetBrandListCollection = async (req, res) => {
  try {
    const brandList = await getBrandList(req, res);
    successResponse(res, brandList, "Brand list fetched successfully");
  } catch (error) {
    errorResponse(res, error, "Error fetching brand list");
  }
};

export { handleGetBrandListCollection };
