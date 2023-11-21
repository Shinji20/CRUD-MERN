import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://dbtaaka:santic221@cluster0.mc3ukuo.mongodb.net/")
    console.log(">>> Connected to MongoDB")
  } catch (error) {
    console.log(error);
  }    
}