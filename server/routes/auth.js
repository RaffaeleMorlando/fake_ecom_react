import express from 'express';
import { createUser, loginUser, logoutUser } from '../controllers/auth.js'

const router = express.Router();

router.post('/signup', createUser);
router.post('/signin', loginUser);

export default router;