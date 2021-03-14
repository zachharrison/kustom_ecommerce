import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Product from '../models/productModel.js';

// @DESC      FETCH ALL PRODUCTS
// @ROUTE     GET /api/products
// @ACCESS    PUBLIC
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

// @DESC      FETCH A SINGLE PRODUCT
// @ROUTE     GET /api/products/:id
// @ACCESS    PUBLIC
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

export default router;
