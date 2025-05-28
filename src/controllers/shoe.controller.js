import {
  successResponse,
  errorResponse,
  invalidData,
} from "../config/response.js";
import {
  addNewShoe,
  getShoeList,
  updateShoe,
  findShoeByID,
  deleteShoe,
  getDeletedShoe,
} from "../models/shoe.js";

const checkValidShoe = (shoe) => {
  if (
    !shoe.name ||
    !shoe.brand ||
    !shoe.size ||
    !shoe.color ||
    !shoe.price ||
    !shoe.desc ||
    !shoe.img
  ) {
    return false;
  }
  return true;
};

const exportBrand = (shoes) => {
  const brand_list = [];
  const data_brand = {};
  shoes.forEach((shoe) => {
    if (!brand_list.includes(shoe.brand)) {
      brand_list.push(shoe.brand);
      data_brand[shoe.brand] = 1;
    } else {
      data_brand[shoe.brand] += 1;
    }
  });
  return data_brand;
};

const exportCategory = (shoes) => {
  const category_list = [];
  const data_category = {};
  shoes.forEach((shoe) => {
    if (!category_list.includes(shoe.category)) {
      category_list.push(shoe.category);
      data_category[shoe.category] = 1;
    } else {
      data_category[shoe.category] += 1;
    }
  });
  return data_category;
};

export const handleGetShoeList = async (req, res) => {
  try {
    const shoes = await getShoeList(req, res);
    successResponse(res, shoes, "Shoe list fetched successfully");
  } catch (error) {
    errorResponse(res, error, "Error fetching shoes");
  }
};

export const handleAddNewShoe = async (req, res) => {
  try {
    const newShoe = req.body;
    const isValidShoe = checkValidShoe(newShoe);
    if (!isValidShoe) {
      return invalidData(res, "Invalid shoe data");
    }
    const result = await addNewShoe(req, res);
    successResponse(res, result, "Shoe added successfully");
  } catch (error) {
    errorResponse(res, error, "Error add new shoes");
  }
};

export const handleGetShoeBrand = async (req, res) => {
  try {
    const shoes = await getShoeList(req, res);
    const brand_list = exportBrand(shoes);
    successResponse(res, brand_list, "Shoe brand list fetched successfully");
  } catch (error) {
    errorResponse(res, error, "Error fetching shoe brand");
  }
};

export const handleGetShoeByBrand = async (req, res) => {
  try {
    const brand = req.params.brandName;
    if (brand) {
      const shoes = await getShoeList(req, res);
      const shoe_brand = shoes.filter((shoe) => shoe.brand === brand);
      successResponse(res, shoe_brand, "Shoe brand list fetched successfully");
    } else {
      invalidData(res, "Invalid brand name");
    }
  } catch (error) {
    errorResponse(res, error, "Error fetching shoe brand list");
  }
};

export const handleGetShoeByID = async (req, res) => {
  try {
    const shoe_data = await findShoeByID(req, res);
    if (shoe_data) {
      successResponse(res, shoe_data, "Shoe fetched successfully");
    } else {
      invalidData(res, "Invalid shoe ID");
    }
  } catch (error) {
    errorResponse(res, error, "Error fetching shoe by ID");
  }
};

export const handleGetShoesByName = async (req, res) => {
  try {
    const name = req.params.name;
    if (name) {
      const shoes = await getShoeList(req, res);
      const shoe_name = shoes.filter((shoe) =>
        shoe.name.toLowerCase().includes(name.toLowerCase()),
      );
      successResponse(res, shoe_name, "Shoe brand list fetched successfully");
    } else {
      invalidData(res, "Invalid shoe name");
    }
  } catch (error) {
    errorResponse(res, error, "Error fetching shoe by name");
  }
};

export const handleGetShoeCategory = async (req, res) => {
  try {
    const shoes = await getShoeList(req, res);
    const category_list = exportCategory(shoes);
    successResponse(
      res,
      category_list,
      "Shoe category list fetched successfully",
    );
  } catch (error) {
    errorResponse(res, error, "Error fetching shoe category");
  }
};

export const handleGetShoeByCategory = async (req, res) => {
  try {
    const category = req.params.categoryName;
    if (category) {
      const shoes = await getShoeList(req, res);
      const shoe_category = shoes.filter((shoe) => shoe.category === category);
      successResponse(
        res,
        shoe_category,
        "Shoe category list fetched successfully",
      );
    } else {
      invalidData(res, "Invalid category name");
    }
  } catch (error) {
    errorResponse(res, error, "Error fetching shoe by category");
  }
};

export const handleUpdateShoe = async (req, res) => {
  try {
    const shoeId = req.params.id;
    const updatedShoe = req.body;
    const isValidShoe = checkValidShoe(updatedShoe);
    if (!isValidShoe) {
      return invalidData(res, "Invalid shoe data");
    }
    const result = await updateShoe(req, res);
    if (result) {
      successResponse(res, { shoeId, result }, "Shoe updated successfully");
    } else {
      invalidData(res, "Shoe not found");
    }
  } catch (error) {
    errorResponse(res, error, "Error updating shoe");
  }
};

export const handleDeleteShoe = async (req, res) => {
  try {
    const shoeId = req.params.id;
    const result = await deleteShoe(req, res);
    if (result) {
      successResponse(res, { shoeId, result }, "Shoe deleted successfully");
    } else {
      invalidData(res, "Shoe not found");
    }
  } catch (error) {
    errorResponse(res, error, "Error deleting shoe");
  }
};

export const handleGetDeleteShoe = async (req, res) => {
  try {
    const shoes = await getDeletedShoe(req, res);
    successResponse(res, shoes, "Deleted Shoe list fetched successfully");
  } catch (error) {
    errorResponse(res, error, "Error fetching shoes");
  }
};
