import { NextFunction, Request, Response } from "express";
import { jwtDecode } from "../../utils/api/jwt-decode";

export function jwtMiddleFactory(secret: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { cookies } = req;
    const header = req.get("authentication");
    const token = cookies.token || header;
    req.context = req.context || {};
    const currentUser = jwtDecode(token, secret) || {};
    req.context.token = token || "";
    req.context.currentUser = currentUser;
    next();
  };
}
