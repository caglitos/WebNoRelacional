import mongoose from "mongoose";

export const connectDB = async () => {
  console.log(">>> Conecting to DB...");
  try {
    await mongoose.connect("mongodb://localhost/baseDeDatos");
    console.log(">>> DB is connected");
  } catch (error) {
    console.log(error);
    console.log("error");
  }
};
