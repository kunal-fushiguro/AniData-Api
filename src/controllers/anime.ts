import { DEV } from "../config/config";
import { ApiResponse } from "../utils/ApiResponse";

import { Request, Response } from "express";

async function test(Request: Request, Response: Response) {
  try {
    Response.json(new ApiResponse(200, "ok", true, {}));
  } catch (error: any) {
    Response.json(
      new ApiResponse(
        error.statusCode || 500,
        error.message || "Error on test routes",
        false,
        DEV === "DEV" ? error.stack : {}
      )
    );
  }
}

export { test };
