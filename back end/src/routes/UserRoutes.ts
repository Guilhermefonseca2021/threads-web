import { Router } from "express";
import {
  followUnfollowUser,
  loginUser,
  logoutUser,
  signupUser,
} from "../controllers/UserController";
import Auth from "../middlewares/auth";

const routes = Router();

routes.post("/signup", signupUser);
routes.post("/login", loginUser);
routes.post("/logout", logoutUser);

routes.post("/follow/:id", Auth, followUnfollowUser);

export default routes;
