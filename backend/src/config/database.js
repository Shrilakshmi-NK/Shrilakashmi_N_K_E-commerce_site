import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    // Use local MongoDB if MONGODB_URI is not set or is the default
    const mongoURI = process.env.MONGODB_URI && 
                     !process.env.MONGODB_URI.includes('username:password') 
                     ? process.env.MONGODB_URI 
                     : 'mongodb://localhost:27017/ecommerce';
    
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 3000, // 3 second timeout
      connectTimeoutMS: 3000
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.log('MongoDB not available, using sample data');
    // Don't exit process, fall back to sample data
    return null;
  }
};

export default connectDB;