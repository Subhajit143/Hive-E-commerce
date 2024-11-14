import { Product } from "../models/product.model.js";

// Get all products

export const getProducts = async (req,res) => {
    try {
        const products = await Product.find();
        return res.status(200).json(products)
        
    } catch (error) {
        console.log("Error from getProducts"+error);
        return [];
    }
};

