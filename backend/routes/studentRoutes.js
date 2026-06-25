import express from 'express';
import { searchStudentByRoll } from '../controllers/studentController.js';
import {authenticateToken,authorizeRoles} from '../middlewares/authMiddleware.js';

const studentRouter=express.Router();

studentRouter.get('/search-by-roll',authenticateToken,authorizeRoles("admin"),searchStudentByRoll);

export default studentRouter;