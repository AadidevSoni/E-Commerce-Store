import express from "express";
import { createUser,loginUser,logoutCurrentUser } from "../controllers/userController.js";
const router = express.Router()

router.route('/').post(createUser); //createUser is a controller which is handled by asyncHandler
router.post('/auth',loginUser);
router.post('/logout',logoutCurrentUser);  

export default router;