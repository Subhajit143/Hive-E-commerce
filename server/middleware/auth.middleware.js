import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";


// this middleware is to verify the token and retrive the data through the token
const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ message: "Token is not provided ,Access denied" });
  }
  //Assuming token is in  the format "Bearer <jwtToken>, Removing the "bearrer"  prefix
  const jwtToken = token.replace("Bearer","").trim();
  console.log(("token from authmiddleware: ",jwtToken));
  // to get data from data base
  try {
    const isVarified = jwt.verify(jwtToken,process.env.JWT);
    const userData = await User.findOne({ email: isVarified.email }).select({
      password: 0,
    });
    console.log("user data=: ",userData);
    req.userGet = userData; //userGet directly fetch from userGet(auth.controllrs)
    req.token = token;
    req.userId = userData._id;
    next();
  } catch (error) {
    res.status(404).json({ message: "Access denied,Invalid Token" });
  }
};
export { authMiddleware };
