// src/routes/products.routes.js

import express from 'express';
import { protectRoute } from '../middlewares/auth.middleware.js';
import {
  fetchProducts,
  fetchProductById,
  createNewProduct,
  deleteProduct,
} from '../controllers/product.controller.js';

const router = express.Router();

// Rutas públicas
router.get('/', fetchProducts);
router.get('/:id', fetchProductById);

// Rutas protegidas (requieren token JWT)
router.post('/', protectRoute, createNewProduct);
router.delete('/:id', protectRoute, deleteProduct);

export default router;