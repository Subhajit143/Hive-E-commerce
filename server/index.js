import express from "express"
import { connectDb } from "./db/db.js"
import dotenv from "dotenv"
import { router } from "./router/auth.router.js";
import { AdminRouter } from "./router/admin.router.js";
import { productRouter } from "./router/product.router.js";
import cors from "cors"
import multer from "multer";
import { Product } from "./models/product.model.js";


const app = express();

//To tackel cors 
const corsOrigin={
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,OPTIONS,PATCH",
    credentials:true,
};
app.use(cors(corsOrigin))

app.use(express.json());
dotenv.config({
    path: "./.env"
})
connectDb()

app.use("/api/auth", router);
app.use("/api/product",productRouter)
app.use("/api/admin", AdminRouter);

const storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname);
    }

})
const upload=multer({storage})
app.use('/uploads', express.static('uploads'));
app.post("/api/admin/addProduct",upload.single("image"),async(req,res)=>{
    try {
         // Get product details from req.body
         
        
        const newProduct =  new Product({
            name : req.body.name,
            description : req.body.description,
            price : req.body.price,
            imageUrl: req.file.path, // Save the file path to imageUrl
            category : req.body.category,
            stock : req.body.stock,
            
          })
          
          
         // Save the product to the database
        await  newProduct.save();

        // Send success response
        res.status(200).send({ message: "Product added successfully" });
          
          
    } catch (error) {
        res.status(400).send({ "Error msg": error.message });
    }
     // Logging request body for debugging purposes
     console.log("The request body is =", req.body);
    

})

app.listen(process.env.PORT,()=>{
    console.log(`Server is Running at ${process.env.PORT}`);
    
})
