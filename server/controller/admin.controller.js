import { User } from "../models/user.model.js";
import { Product } from "../models/product.model.js";
import { promise } from "zod";
import {v2 as cloudinary} from "cloudinary"

//To show all the users in the database
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({},{ password: 0 });
    console.log(users);
    if (!users || users.length === 0) {
      console.log("No user from admin controller");
      
      return res.status(404).send("No users found");
    }
    return res.status(200).json(users);
  } catch (error) {
    console.log("Error from admin getAll users = ", error);
  }
};

export const deleteUser = async(req, res) => {
  try {
    const id= req.params.id;
    await User.deleteOne({_id:id});
    res.status(200).json({message: "User deleted successfully",})
    
  } catch (error) {
    console.log("Error from admin deleteUser = ", error);    
  }
}

export const updateUser= async (req, res,next) => {
  try {
    const id= req.params.id;
    const updateUserData = req.body;
    const updatedUser = await User.updateOne({_id:id},{
      $set: updateUserData,
    })
    return res.status(200).json(updatedUser)
  } catch (error) {
    next(error);
  }
}

export const  getProducts =async(req,res)=>
{
  try {
    const product= await Product.find()
    console.log(prod);
    if(!prod||prod.length ===0){
      console.log("No product found from admin controller");
      
      return res.status(404).send("No products found");
    }
    return  res.status(200).json({ message: `Get product succesfully` ,product})
    
  } catch (error) {
    console.log("Error from admin getAll product = ", error);
  }
}

export const deletedProduct = async (req,res)=>{
  try {
    const id = req.params.id;
    await Product.deleteOne({_id:id});
    return res.status(200).json({message: "Product deleted  successfully",});
  } catch (error) {
    console.log("Error from admin deleteProduct",error);
    
  }
}

// Add a new product
export const addProduct = async (req, res) => {
  try {
    // Process images first
    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];

    let images = [image1, image2,image3].filter((item) => item !== undefined);

    // Upload images to Cloudinary and get URLs
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: 'image',
        });
        return result.secure_url;
      })
    );

    // Now destructure req.body into productData
    const { name, description, price, category, stock } = req.body;

    // Create product data object
    const productData = {
      name,
      description,
      price,
      category,
      stock,
      imageUrl: imagesUrl, // Use the processed image URLs
    };

    // Save to database
    const product = new Product(productData);
    await product.save();

    res.status(200).json({ message: `${name} Added to DB Successfully` });
  } catch (error) {
    console.error("Error adding product", error);
    res.status(500).json({ message: "Error adding product", error });
  }
};

export const singleProduct= async(req,res)=>{
  try {
    const id = req.params.id;
    const product = await Product.findById({_id:id});
    res.status(200).json({ message: `Get product succesfully` ,product});
  } catch (error) {
    console.error("Error getting Single product", error);
    res.status(500).json({ message: "Error Geting Single product", error });
  }
}
  
  
  
