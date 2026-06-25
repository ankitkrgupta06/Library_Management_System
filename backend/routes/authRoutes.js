import express from 'express';
import  {registerUser,verifyOtp,completeProfile,loginUser,registerAdmin,getProfile,updateProfile,getUsers} from '../controllers/authController.js';
import {authenticateToken,authorizeRoles} from '../middlewares/authMiddleware.js';

const authRouter=express.Router();

authRouter.post('/register',registerUser);
authRouter.post('/verify-otp',verifyOtp);
authRouter.post('/complete-profile',completeProfile);

authRouter.post('/login',loginUser);
authRouter.post('/register-admin',registerAdmin);

authRouter.get('/me',authenticateToken,getProfile);
authRouter.put('/update-profile',authenticateToken,updateProfile);
authRouter.get('/users',authenticateToken,authorizeRoles("admin"),getUsers);

export default authRouter;