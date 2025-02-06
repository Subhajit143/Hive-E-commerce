import mongoose  from "mongoose";

const productSchema= new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    imageUrl: { type: Array, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true }, 
    
})

const Product = new mongoose.model('Product', productSchema)
export {Product}



// In MySQl
// import { db } from "../db/mySql.js";

// export const Product = async (productData) => {
//   const query = `
//     INSERT INTO products (name, description, price, imageUrl, category, stock)
//     VALUES (?, ?, ?, ?, ?, ?);
//   `;
//   const values = [
//     productData.name,
//     productData.description,
//     productData.price,
//     JSON.stringify(productData.imageUrl),
//     productData.category,
//     productData.stock,
//   ];

//   return new Promise((resolve, reject) => {
//     db.query(query, values, (err, results) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve(results);
//     });
//   });
// };


