"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = test;
exports.fetchAnime = fetchAnime;
exports.fetchManga = fetchManga;
exports.fetchGerne = fetchGerne;
exports.fetchSpecifyGrenesAnime = fetchSpecifyGrenesAnime;
const anime_1 = require("../models/anime");
const manga_1 = require("../models/manga");
const config_1 = require("../config/config");
const ApiResponse_1 = require("../utils/ApiResponse");
const gerne_1 = require("../models/gerne");
async function test(Request, Response) {
    try {
        Response.json(new ApiResponse_1.ApiResponse(200, "ok", true, {}));
    }
    catch (error) {
        Response.json(new ApiResponse_1.ApiResponse(error.statusCode || 500, error.message || "Error on test routes", false, config_1.DEV === "DEV" ? error.stack : {}));
    }
}
async function fetchAnime(Request, Response) {
    try {
        const limit = Request.query.limit;
        const skip = Request.query.skip;
        const data = await anime_1.Animes.find()
            .limit(Number(limit) || 10)
            .skip(Number(skip) || 0);
        Response.json(new ApiResponse_1.ApiResponse(200, "ok", true, Object.assign({}, data)));
    }
    catch (error) {
        Response.json(new ApiResponse_1.ApiResponse(error.statusCode || 500, error.message || "Error on test routes", false, config_1.DEV === "DEV" ? error.stack : {}));
    }
}
async function fetchManga(Request, Response) {
    try {
        const limit = Request.query.limit;
        const skip = Request.query.skip;
        const data = await manga_1.Mangas.find()
            .limit(Number(limit) || 10)
            .skip(Number(skip) || 0);
        Response.json(new ApiResponse_1.ApiResponse(200, "ok", true, Object.assign({}, data)));
    }
    catch (error) {
        Response.json(new ApiResponse_1.ApiResponse(error.statusCode || 500, error.message || "Error on test routes", false, config_1.DEV === "DEV" ? error.stack : {}));
    }
}
async function fetchGerne(Request, Response) {
    try {
        const data = await gerne_1.Genres.find();
        Response.json(new ApiResponse_1.ApiResponse(200, "ok", true, Object.assign({}, data)));
    }
    catch (error) {
        Response.json(new ApiResponse_1.ApiResponse(error.statusCode || 500, error.message || "Error on test routes", false, config_1.DEV === "DEV" ? error.stack : {}));
    }
}
async function fetchSpecifyGrenesAnime(Request, Response) {
    try {
        const limit = Request.query.limit;
        const skip = Request.query.skip;
        const types = Request.params.types;
        if (!types) {
            Response.json(new ApiResponse_1.ApiResponse(400, "Types is missing", false, {}));
        }
        const data = await anime_1.Animes.find({ Genres: { $regex: `${types}` } })
            .limit(Number(limit) || 10)
            .skip(Number(skip) || 0);
        Response.json(new ApiResponse_1.ApiResponse(200, "ok", true, Object.assign({}, data)));
    }
    catch (error) {
        Response.json(new ApiResponse_1.ApiResponse(error.statusCode || 500, error.message || "Error on test routes", false, config_1.DEV === "DEV" ? error.stack : {}));
    }
}
