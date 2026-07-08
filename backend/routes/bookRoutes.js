import express from 'express';
import { authenticateToken, authorizeRoles } from '../middlewares/authMiddleware.js';
import { applyFine, clearFine, getFineSettings, getIssues, getStudentIssues, returnBook, updateFineSettings } from '../controllers/bookController.js';

const bookRouter=express.Router();

bookRouter.get('/fine-settings',authenticateToken,getFineSettings);
bookRouter.get('/issues/students',authenticateToken,authorizeRoles("user"),getStudentIssues);

bookRouter.get('/issues',authenticateToken,authorizeRoles("admin"),getIssues);
bookRouter.post('/issue-manual',authenticateToken,authorizeRoles("admin"),applyFine);

bookRouter.put("/issues/:id/return",authenticateToken,authorizeRoles("admin"),returnBook);
bookRouter.put("/issues/:id/fine",authenticateToken,authorizeRoles("admin"),applyFine);

bookRouter.put('/issues/:id/clear-fine',authenticateToken,authorizeRoles("admin"),clearFine);
bookRouter.put('/fine-settings',authenticateToken,authorizeRoles("admin"),updateFineSettings);

export default bookRouter;