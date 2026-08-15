import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection to Database Successful");
  } catch (e) {
    console.log("ERROR ", e);
    process.exit(1);
  }
};

export default connectDB;
