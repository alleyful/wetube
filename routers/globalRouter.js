import express from "express";
import routes from "../routes";
import { getJoin, postJoin, login, logout } from "../controllers/userController";
import { home, search } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.get(routes.join, postJoin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;