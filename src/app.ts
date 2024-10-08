import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { PORT } from "./config/config";
import { ConnectDb } from "./db/db";
import { routes } from "./routes/routes";
import { rateLimit } from "express-rate-limit";
import { Caches } from "./utils/redisCache";

const app = express();
const rate = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 min
  limit: 60, // 60 rpm
  standardHeaders: "draft-7",
  legacyHeaders: false,
});
const redisCaches = new Caches();

app.use(cors({ origin: "*", credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(rate);
app.use("/api/v1", routes);

app.listen(PORT || 5000, async () => {
  try {
    await ConnectDb();
    await redisCaches.connectToRedis();
    console.log("Server Started on PORT : ", PORT || 5000);
  } catch (error: any) {
    console.log("Connection Error : ", error.message);
    process.exit(1);
  }
});

export { redisCaches };
