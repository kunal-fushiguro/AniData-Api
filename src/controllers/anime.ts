import { Animes } from "../models/anime";
import { Mangas } from "../models/manga";
import { DEV } from "../config/config";
import { ApiResponse } from "../utils/ApiResponse";
import { Request, Response } from "express";
import { Genres } from "../models/gerne";

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

async function fetchAnime(Request: Request, Response: Response) {
  try {
    const limit = Request.query.limit;
    const skip = Request.query.skip;
    const data = await Animes.find()
      .limit(Number(limit) || 10)
      .skip(Number(skip) || 0);
    Response.json(new ApiResponse(200, "ok", true, { ...data }));
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

async function fetchManga(Request: Request, Response: Response) {
  try {
    const limit = Request.query.limit;
    const skip = Request.query.skip;
    const data = await Mangas.find()
      .limit(Number(limit) || 10)
      .skip(Number(skip) || 0);
    Response.json(new ApiResponse(200, "ok", true, { ...data }));
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

async function fetchGerne(Request: Request, Response: Response) {
  try {
    const data = await Genres.find();
    Response.json(new ApiResponse(200, "ok", true, { ...data }));
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

async function fetchSpecifyGrenesAnime(Request: Request, Response: Response) {
  try {
    const limit = Request.query.limit;
    const skip = Request.query.skip;
    const types = Request.params.types;
    if (!types) {
      Response.json(new ApiResponse(400, "Types is missing", false, {}));
    }
    const data = await Animes.find({ Genres: { $regex: `${types}` } })
      .limit(Number(limit) || 10)
      .skip(Number(skip) || 0);
    Response.json(new ApiResponse(200, "ok", true, { ...data }));
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

export { test, fetchAnime, fetchManga, fetchGerne, fetchSpecifyGrenesAnime };
