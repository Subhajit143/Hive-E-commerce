import { User } from "../models/user.model.js";
import { Product } from "../models/product.model.js";

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
    const prod= await Product.find()
    console.log(prod);
    if(!prod||prod.length ===0){
      console.log("No product found from admin controller");
      
      return res.status(404).send("No products found");
    }
    return res.status(200).json(prod);
    
  } catch (error) {
    console.log("Error from admin getAll product = ", error);
  }
}

export const deletedProduct = async (req,res)=>{
  try {
    const id = req.params.id;
    await Product.deleteOne({_id:id});
    return res.status(200).json({message: "Product deleted successfully",});
  } catch (error) {
    console.log("Error from admin deleteProduct",error);
    
  }
}

// Add a new product
// export const addProduct =async(req,res) => {
//   try {
//     const newProduct =  new Product({
//       name: req.body.name,
//       description: req.body.description,
//       price: req.body.price,
//       imageUrl: req.body.imageUrl,
//       category: req.body.category,
//       stock: req.body.stock,
//     })
//     await newProduct.save()
//     res.status(200).send({  message: "Product added successfully",})
    
//   } catch (error) {
//     res.send("ERROR FROM IMG: ",error)
//   }
 
  
  
  
  
  
  
//   // try {
//   //  const { name, description, price, imageUrl, category, stock } = req.body;
//   //  const product = new Product({ name, description, price, imageUrl, category, stock });
//   //  await product.save();
//   //  res.status(201).send({
//   //      message: "Product added successfully",
       
//   //  });
//   //  console.log(product);
   
//   // } catch (error) {
//   //  console.log("Error from addProduct controller: " + error);
   
//   // }

// }
