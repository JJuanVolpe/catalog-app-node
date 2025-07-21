import express from 'express';
import { loginUser, registerUser } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/api/login', loginUser);
router.post('/api/register', registerUser);

export default router;
