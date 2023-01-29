import { NextFunction, Request, Response } from "express";
import { jwtDecode } from "../../utils/api/jwt-decode";

export function jwtMiddle(secret: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { cookies } = req;
    if (cookies === undefined) {
      req.currentUser = {};
      return next();
    }
    const token = cookies.token;
    const currentUser = token ? jwtDecode(token, secret) : {};
    req.currentUser = currentUser;
    next();
  };
}
