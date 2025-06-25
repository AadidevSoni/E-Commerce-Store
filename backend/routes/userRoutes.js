import express from "express";
import { createUser,loginUser,logoutCurrentUser,getAllUsers,getCurrentUserProfile,updateCurrentUserProfile,
         deleteUserById,getUserById,updateUserById } from "../controllers/userController.js";
import { authenticate,authorizedAdmin } from "../middlewares/authMiddleware.js";
const router = express.Router()

//createUser is a controller which is handled by asyncHandler
//If the user is authenticated and authorized, we get all the users
router.route('/').post(createUser).get(authenticate,authorizedAdmin,getAllUsers); 
router.post('/auth',loginUser);
router.post('/logout',logoutCurrentUser);  

//The user can change profile only if he is authenticated
router.route('/profile').get(authenticate,getCurrentUserProfile).put(authenticate, updateCurrentUserProfile);

//Admin routes
router.route('/:id')
  .delete(authenticate,authorizedAdmin,deleteUserById)
  .get(authenticate,authorizedAdmin,getUserById)
  .put(authenticate,authorizedAdmin,updateUserById);

export default router;