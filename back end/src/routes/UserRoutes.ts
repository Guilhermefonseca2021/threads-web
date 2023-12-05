import { Router } from "express";
import { signupUser } from "../controllers/UserController";
import utils from '../utils/helpers/generateTokenAndCookie'

const routes = Router();

routes.get("/signup", signupUser);
routes.use()

export default routes
