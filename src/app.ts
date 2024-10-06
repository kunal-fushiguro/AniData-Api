import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: "*", credentials: true }));
app.use(express.urlencoded({ extended: true }));

app.use(
  (err: any, request: Request, response: Response, _next: NextFunction) => {
    return;
  }
);
