import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { PORT } from "./config/config";
import { ConnectDb } from "./db/db";
import { routes } from "./routes/routes";
import { rateLimit } from "express-rate-limit";
import { Caches } from "./utils/redisCache";
import morgan from "morgan";
import { logger } from "./logs/config";

const app = express();
const morganFormat = ":method :url :status :response-time ms";
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

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        console.log(message);
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

app.listen(PORT || 5000, async () => {
  try {
    await ConnectDb();
    await redisCaches.connectToRedis();
    logger.info(`Server Started on PORT : ${PORT || 5000}`);
  } catch (error: any) {
    logger.error(`Connection Error :  ${error.message}`);
    process.exit(1);
  }
});

export { redisCaches };
