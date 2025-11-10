import Product from '../models/Product.js';
import { products } from '../data/products.js';

export const seedProducts = async () => {
  try {
    // Check if products already exist
    const existingProducts = await Product.countDocuments();
    
    if (existingProducts === 0) {
      console.log('Seeding products to database...');
      await Product.insertMany(products);
      console.log('Products seeded successfully!');
    } else {
      console.log(`Database already has ${existingProducts} products`);
    }
  } catch (error) {
    console.error('Error seeding products:', error);
  }
};