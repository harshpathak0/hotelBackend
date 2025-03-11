import express from 'express';
const router = express.Router();
import * as authController from '../controllers/auth.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';

// Auth routes
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/verify-token', verifyToken, authController.verifyToken);
router.get('/agents', verifyToken, authController.getAllAgents)

export default router;
