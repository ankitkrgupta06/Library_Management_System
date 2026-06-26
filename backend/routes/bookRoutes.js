import express from 'express';
import { authenticateToken, authorizeRoles } from '../middlewares/authMiddleware';
import { applyFine, clearFine, getFineSettings, getIssues, getStudentIssues, updateFineSettings } from '../controllers/bookController';

const bookRouter=express.Router();

bookRouter.get('/fine-settings',authenticateToken,getFineSettings);
bookRouter.get('/issues/students',authenticateToken,authorizeRoles("user"),getStudentIssues);

bookRouter.get('/issues',authenticateToken,authorizeRoles("admin"),getIssues);
bookRouter.post('/issue-manual',authenticateToken,authorizeRoles("admin"),applyFine);

bookRouter.put('/issues/:id/clear-fine',authenticateToken,authorizeRoles("admin"),clearFine);
bookRouter.put('/fine-settings',authenticateToken,authorizeRoles("admin"),updateFineSettings);

export default bookRouter;