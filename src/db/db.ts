import mongoose from "mongoose";
import { MONGODB_URL } from "../../config/config";

async function ConnectDb() {
  try {
    await mongoose.connect(String(MONGODB_URL));
    console.log("Database Connection ");
  } catch (error: any) {
    console.log("Error While Connectiong Database");
    process.exit(1);
  }
}

export { ConnectDb };
