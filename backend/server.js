import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './src/config/database.js';
import { seedProducts } from './src/utils/seedData.js';
import productRoutes from './src/routes/products.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB and seed data
const initializeDatabase = async () => {
  try {
    const connection = await connectDB();
    if (connection) {
      await seedProducts();
    }
  } catch (error) {
    console.log('Database initialization failed, continuing with sample data');
  }
};

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'E-commerce API Server is running',
    timestamp: new Date().toISOString()
  });
});

// Basic route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to E-commerce API' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
  
  // Initialize database connection and seed data (non-blocking)
  initializeDatabase().catch(err => {
    console.log('Database initialization failed, using sample data');
  });
});