import {
  fetchAnime,
  fetchGerne,
  fetchManga,
  fetchSpecifyGrenesAnime,
  test,
} from "../controllers/anime";
import { Router } from "express";

const routes = Router();

routes.get("/test", test); // /test
routes.get("/animes", fetchAnime); // /animes?limit=10&skip=10
routes.get("/mangas", fetchManga); // /mangas?limit=10&skip=10
routes.get("/animes/genre", fetchGerne); // /animes/grenes
routes.get("/animes/genre/:types", fetchSpecifyGrenesAnime); // /animes/grenes/Action?limit=10&skip=10

export { routes };
