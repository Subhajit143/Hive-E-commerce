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

