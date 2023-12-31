import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { promisify } from "util";
import auth from "../config/auth";

interface AuthenticatedRequest extends Request {
  userId?: string;
}

async function Auth(
  request: AuthenticatedRequest,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: "Token was not provided" });
  }

  const [, token] = authHeader.split(" ");
  console.log(token);
  
  try {
    const decoded: any = await promisify<string, jwt.Secret>(jwt.verify)(
      token,
      auth.secret as string
    );

    request.userId = decoded.id;

    return next();
  } catch (error) {
    return response.status(401).json({ error: "invalid token" });
  }
}

export default Auth;
