import express from 'express';
import { createUser, loginUser, logoutUser } from '../controllers/auth.js'
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/signup', createUser);
router.post('/signin', loginUser);
router.get('/signout', auth, logoutUser)

export default router;