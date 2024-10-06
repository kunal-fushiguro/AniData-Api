import { config } from "dotenv";

config();

export const { MONGODB_URL, PORT, DEV } = process.env;
