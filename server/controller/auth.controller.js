import { User } from "../models/user.model.js";

const home=async (req, res) => {
    try {
        res.status(200).send("Welcome Home Router")
    } catch (error) {
        console.log(error);     
    }
}

//for registration Logic
const register = async (req, res) => {
    try {
        const {username,email,password} = req.body
        const userexist=await User.findOne({email:email})
        if (userexist){
            return res.status(400).send("User already exist")
        }
        const UserCreated = await User.create({username,email,password})
        res.status(201).send({
            message:"User Created Successfully",
            token: await UserCreated.generateToken(),
            userId: UserCreated._id.toString(),})
    } catch (error) {
        console.log("Error from register controller: " + error);
        
    }
}

//for Login Logic
const login =async (req,res)=>{
    try {
        const {email,password}=req.body;
        const userExist=await User.findOne({email});
        // console.log(userExist);
        if (!userExist) {
            return res.status(400).json({message:"invalid Credential"})
        }
    // const user= await bcrypt.compare(password,userExist.password);
    const user=await userExist.comparePassword(password)
    if(user){
        res.status(200).json({
            message:"Login Successful",
            token: await userExist.generateToken(),
            userId: userExist._id.toString(),
        })
    }   
    
    else{
        res.status(400).json({message:"Invalid Credential Failed to login"})
    }

    } catch (error) {
        res.status(500).json("Internal Server Errors BOiii ")
        
    }
}
// get all User logic 
const userGet=async(req,res)=>{
    try {
        const userData=req.userGet;
        console.log("userGet=",userData);
        return res.status(200).json({userData})
        
    } catch (error) {
        console.log(`error from the user route ${error}`);
        
    }
}

export {register}
export {home}
export{login}
export {userGet}