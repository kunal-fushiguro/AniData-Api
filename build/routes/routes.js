"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const anime_1 = require("../controllers/anime");
const express_1 = require("express");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.get("/test", anime_1.test); // /test
routes.get("/animes", anime_1.fetchAnime); // /animes?limit=10&skip=10
routes.get("/mangas", anime_1.fetchManga); // /mangas?limit=10&skip=10
routes.get("/animes/grenes", anime_1.fetchGerne); // /animes/grenes
routes.get("/animes/grenes/:types", anime_1.fetchSpecifyGrenesAnime); // /animes/grenes/Action?limit=10&skip=10
