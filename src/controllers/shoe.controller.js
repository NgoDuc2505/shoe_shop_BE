import { successResponse } from "../config/response.js";
import { addNewShoe, getShoeList } from "../models/shoe.js";


export const handleGetShoeList = async (req, res) => {
    try{
        const shoes = await getShoeList(req, res);
        successResponse(res, shoes, "Shoe list fetched successfully");
    }
    catch(error){
        errorResponse(res, error, "Error fetching shoes");
    }
}

const checkValidShoe = (shoe) => {
    if (!shoe.name || !shoe.brand || !shoe.size || !shoe.color || !shoe.price || !shoe.desc || !shoe.img) {
        return false;
    }
    return true;
}

export const handleAddNewShoe = async (req, res) => {
    try{
        const newShoe = req.body;
        const isValidShoe = checkValidShoe(newShoe);
        if (!isValidShoe) {
            return invalidData(res, "Invalid shoe data");
        }
        const result = await addNewShoe(req, res);
        successResponse(res, result, "Shoe added successfully");
    }catch(error){
        errorResponse(res, error, "Error add new shoes");
    }
}