// import { db } from "../db/mySql.js";
import { Product } from "../models/product.model.js";

// Get all  products in MongoDb

export const getProducts = async (req,res) => {
    try {
        const products = await Product.find();
        return res.status(200).json(products)
        
    } catch (error) {
        console.log("Error from getProducts"+error);
        return [];
    }
};




//********** Using MySql ********** */


// export const getProducts = (req, res) => {
//     try {
//       // Query to get all products from the Product table
//       db.query("SELECT * FROM products", (error, results) => {
//         if (error) {
//           console.log("Error from getProducts:", error);
//           return res.status(500).json({ message: "Error fetching products" });
//         }
        
//         // Return products in the response
//         return res.status(200).json(results);
//       });
//     } catch (error) {
//       console.log("Error from getProducts:", error);
//       return res.status(500).json({ message: "Internal server error" });
//     }
//   };
  

