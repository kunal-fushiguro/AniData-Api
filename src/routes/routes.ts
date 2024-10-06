import { test } from "../controllers/anime";
import { Router } from "express";

const routes = Router();

routes.get("/test", test);

export { routes };
