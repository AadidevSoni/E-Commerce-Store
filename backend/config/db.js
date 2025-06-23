import mongoose from "mongoose";

const connectDB = async() => {
  try {

    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected Successfully to MongoDB");
    
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1); //Exit out of everything that is running right now
  }
}

export default connectDB;