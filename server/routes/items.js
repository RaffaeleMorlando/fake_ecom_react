import express from 'express';
import { getItems, createItem, updateItem, deleteItem, getItemById } from '../controllers/items.js'
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getItems);
router.get('/:id', getItemById);
router.post('/', createItem);
router.patch('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;