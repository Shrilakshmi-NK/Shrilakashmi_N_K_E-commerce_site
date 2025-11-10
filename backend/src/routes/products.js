import express from 'express';
import Product from '../models/Product.js';
import { products } from '../data/products.js';

const router = express.Router();

// GET /api/products - Get all products
router.get('/', async (req, res) => {
  try {
    // Try to get from MongoDB first
    let productData;
    try {
      productData = await Product.find({});
      console.log(`Fetched ${productData.length} products from MongoDB`);
    } catch (dbError) {
      console.log('MongoDB not available, using sample data');
      productData = products;
    }
    
    res.json({
      success: true,
      data: productData,
      total: productData.length,
      source: productData === products ? 'sample' : 'database'
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch products'
    });
  }
});

// GET /api/products/:id - Get product by ID
router.get('/:id', async (req, res) => {
  try {
    let product;
    
    // Try MongoDB first
    try {
      product = await Product.findById(req.params.id);
      if (!product) {
        // Try with string ID for sample data compatibility
        product = await Product.findOne({ _id: req.params.id });
      }
    } catch (dbError) {
      console.log('MongoDB not available, using sample data');
      product = products.find(p => p._id === req.params.id);
    }
    
    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }
    
    res.json({
      success: true,
      data: product
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch product'
    });
  }
});

export default router;