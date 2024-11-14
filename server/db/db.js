import mongoose from "mongoose";

const connectDb=async()=>{
    try {
        const connec=await mongoose.connect(`${process.env.URL}`)
        console.log(`Mongo Db Connected !!DB Host ${connec.connection.host}`);
        
    } catch (error) {
        console.log("mongo db error: " + error);
        process.exit(1);
        
    }

}
export {connectDb}