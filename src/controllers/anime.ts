import { Animes } from "../models/anime";
import { Mangas } from "../models/manga";
import { DEV } from "../config/config";
import { ApiResponse } from "../utils/ApiResponse";
import { Request, Response } from "express";
import { Genres } from "../models/gerne";
import { redisCaches } from "../app";
import { logger } from "../logs/config";

async function test(Request: Request, Response: Response) {
  try {
    logger.info(`Method : ${Request.method} IP : ${Request.ip}`);
    Response.json(new ApiResponse(200, "ok", true, {}));
  } catch (error: any) {
    logger.error(`Error : ${error.message}`);
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
    const key = JSON.stringify("Anime" + limit + skip);
    logger.info(`Method : ${Request.method} IP : ${Request.ip} Query : ${key}`);

    const cacheExisted = await redisCaches.getData(key);
    if (cacheExisted) {
      Response.json(
        new ApiResponse(200, "ok", true, { ...JSON.parse(cacheExisted) })
      );
      return;
    }

    const data = await Animes.find()
      .limit(Number(limit) || 10)
      .skip(Number(skip) || 0);
    await redisCaches.setData(key, JSON.stringify(data), 30);

    Response.json(new ApiResponse(200, "ok", true, { ...data }));
  } catch (error: any) {
    logger.error(`Error : ${error.message}`);
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
    const key = JSON.stringify("Manga" + limit + skip);
    logger.info(`Method : ${Request.method} IP : ${Request.ip} Query : ${key}`);
    const cacheExisted = await redisCaches.getData(key);
    if (cacheExisted) {
      Response.json(
        new ApiResponse(200, "ok", true, { ...JSON.parse(cacheExisted) })
      );
      return;
    }

    const data = await Mangas.find()
      .limit(Number(limit) || 10)
      .skip(Number(skip) || 0);
    await redisCaches.setData(key, JSON.stringify(data), 30);

    Response.json(new ApiResponse(200, "ok", true, { ...data }));
  } catch (error: any) {
    logger.error(`Error : ${error.message}`);
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
    logger.info(`Method : ${Request.method} IP : ${Request.ip}`);
    Response.json(new ApiResponse(200, "ok", true, { ...data }));
  } catch (error: any) {
    logger.error(`Error : ${error.message}`);
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

    const key = JSON.stringify("Anime" + types + limit + skip);
    logger.info(`Method : ${Request.method} IP : ${Request.ip} Query : ${key}`);

    const cacheExisted = await redisCaches.getData(key);
    if (cacheExisted) {
      Response.json(
        new ApiResponse(200, "ok", true, { ...JSON.parse(cacheExisted) })
      );
      return;
    }

    const data = await Animes.find({ Genres: { $regex: `${types}` } })
      .limit(Number(limit) || 10)
      .skip(Number(skip) || 0);

    await redisCaches.setData(key, JSON.stringify(data), 30);
    Response.json(new ApiResponse(200, "ok", true, { ...data }));
  } catch (error: any) {
    logger.error(`Error : ${error.message}`);
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
