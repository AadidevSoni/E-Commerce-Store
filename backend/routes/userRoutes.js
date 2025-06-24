import express from "express";
import { createUser,loginUser,logoutCurrentUser,getAllUsers } from "../controllers/userController.js";
import { authenticate,authorizedAdmin } from "../middlewares/authMiddleware.js";
const router = express.Router()

//createUser is a controller which is handled by asyncHandler
//If the user is authenticated and authorized, we get all the users
router.route('/').post(createUser).get(authenticate,authorizedAdmin,getAllUsers); 
router.post('/auth',loginUser);
router.post('/logout',logoutCurrentUser);  

export default router;