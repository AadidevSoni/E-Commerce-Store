import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "./asyncHandler.js";

//Authenticate
const authenticate = asyncHandler(async(req,res,next) => {
  let token;

  //Read jwt from jwt cookie
  token = req.cookies.jwt;

  if(token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET); //Verifies the token is valid and decodes it using the secret key.
      //Finds the user in the database and attaches their data to req.user, excluding the password.
      req.user = await User.findById(decoded.userId).select('-password');
      next();
      
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed!")
    }
  }else {
    res.status(401);
    throw new Error("Not authorized, no token!")
  }
});

//Check for admin
const authorizedAdmin = (req,res,next) => {
  if(req.user && req.user.isAdmin) {
    next();
  }else {
    res.status(401).send("Not authorized as an admin")
  }
};

export {authenticate,authorizedAdmin};