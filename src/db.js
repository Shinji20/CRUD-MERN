import mongoose from 'mongoose';
import { MONGO_DB_CONNECTION } from './utils/env.js'

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_DB_CONNECTION)
    console.log(">>> Connected to MongoDB")
  } catch (error) {
    console.log(error);
  }    
}