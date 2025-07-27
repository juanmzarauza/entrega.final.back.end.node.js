import * as model from "../models/products.model.js"

export const getAllProducts = (req,res) => {
    return model.getAllProducts();
}