import * as model from "../models/products.model.js"

export const getAllProducts = async (req,res) => {
    return await model.getAllProducts();
}