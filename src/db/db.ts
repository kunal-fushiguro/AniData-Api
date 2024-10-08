import mongoose from "mongoose";
import { MONGODB_URL } from "../config/config";
import { logger } from "../logs/config";

async function ConnectDb() {
  try {
    await mongoose.connect(String(MONGODB_URL), { dbName: "Anidata-Api" });
    logger.info("Database Connection ");
  } catch (error: any) {
    logger.error(`Error While Connectiong Database : ${error.message}`);
    process.exit(1);
  }
}

export { ConnectDb };
