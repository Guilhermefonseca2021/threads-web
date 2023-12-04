import { Router } from "express";
import { signupUser } from "../controllers/UserController";

const routes = Router();

routes.get("/signup", signupUser);

export default routes
