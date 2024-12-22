import express from 'express';
import {  getProducts } from '../controller/product.controller.js';
// import { addProduct } from '../controller/admin.controller.js';
import { addProduct, deletedProduct, deleteUser, getAllUsers, singleProduct, updateProduct, updateUser } from '../controller/admin.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { adminMiddleware } from '../middleware/admin.middleware.js';
import multer from "multer"
import { upload } from '../middleware/multer.js';



const AdminRouter = express.Router();
// AdminRouter.get('/',homeAdmin )

AdminRouter.route('/getAllUsers').get(authMiddleware,adminMiddleware,getAllUsers);
AdminRouter.route('/deleteUser/:id').delete(authMiddleware,adminMiddleware,deleteUser)
AdminRouter.route('/update/:id').patch(authMiddleware,adminMiddleware,updateUser)
AdminRouter.route('/addProduct').post(upload.fields([
   {name:"image1", maxCount:1},
   {name:"image2", maxCount:1},
   {name:"image3", maxCount:1}

]),authMiddleware,adminMiddleware,addProduct); 
AdminRouter.route("/getProducts").get(getProducts); //authMiddleware,adminMiddleware,
AdminRouter.route("/deleteProduct/:id").delete(authMiddleware,adminMiddleware,deletedProduct);
AdminRouter.route("/singleProduct/:id").get(singleProduct)
AdminRouter.route('/updateProduct/:id').patch(updateProduct)
export {AdminRouter}
