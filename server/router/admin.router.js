import express from 'express';
import {  getProducts } from '../controller/product.controller.js';
// import { addProduct } from '../controller/admin.controller.js';
import { deletedProduct, deleteUser, getAllUsers, updateUser } from '../controller/admin.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { adminMiddleware } from '../middleware/admin.middleware.js';
import multer from "multer"



const AdminRouter = express.Router();
// AdminRouter.get('/',homeAdmin )

AdminRouter.route('/getAllUsers').get(authMiddleware,adminMiddleware,getAllUsers);
AdminRouter.route('/deleteUser/:id').delete(authMiddleware,adminMiddleware,deleteUser)
AdminRouter.route('/update/:id').patch(authMiddleware,adminMiddleware,updateUser)
// const storage= multer.diskStorage({
//     destination:function (req,file,cb) {
//       cb(null,"../../frontend/src/images")
//     },
//     filename:function (req,file,cb) {
//       cb(null,Date.now()+"-"+file.originalname)
//     }
//   });

//   const upload=multer({storage})
  
// AdminRouter.route('/addProduct',upload.single("image")).post(authMiddleware,adminMiddleware,addProduct);
AdminRouter.route("/getProducts").get(authMiddleware,adminMiddleware,getProducts);
AdminRouter.route("/deleteProduct/:id").delete(authMiddleware,adminMiddleware,deletedProduct);


export {AdminRouter}
