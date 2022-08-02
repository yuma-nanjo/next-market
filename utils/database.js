import mongoose from "mongoose";

const connectDB = async() => {
  try {
    await mongoose.connect(
      "mongodb+srv://umanoc:0510kunkun@cluster0.jxwzf.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Success: Connected to MongoDB");
  } catch (err) {
    console.log("Failure: Unconnected to MongoDB");
    throw new Error();
  }
};

export default connectDB;