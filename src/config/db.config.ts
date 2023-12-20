import mongoose from "mongoose";

import env from "../utils/env.validator";
export const connectDb = async () => {
  try {
    await mongoose.connect(env.DATABASE_URI);
    console.log("Database conntected successfully");
  } catch (err: any) {
    console.log(err);
  }
};
