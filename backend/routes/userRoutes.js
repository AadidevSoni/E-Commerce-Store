import express from "express";
import { createUser } from "../controllers/userController.js";
const router = express.Router()

router.route('/').post(createUser); //createUser is a controller which is handled by asyncHandler

export default router;