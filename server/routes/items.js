import express from 'express';
import { getItems, createItem, updateItem, deleteItem, getItemById } from '../controllers/items.js'

const router = express.Router();

router.get('/', getItems);
router.get('/:id', getItemById);
router.post('/', createItem);
router.patch('/:id', updateItem);
router.delete('/:id', deleteItem);


export default router;