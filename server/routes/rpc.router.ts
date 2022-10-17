import type { Request, Response } from "express";
import express from "express";
import { jwtDecode } from "../../utils/api/jwt-decode";
import { resetCookie, setCookie } from "../../utils/cookie";
import { rpc } from "../api/rpc";
import { config } from "../config";

export const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { cookies, body } = req;

  const token = cookies.token;
  const currentUser = token ? jwtDecode(token, config.auth.secret || "") : {};
  const response = await rpc.receive(body, { currentUser } as any);
  if (response) {
    switch (body?.method) {
      case "login":
        if (response.result?.token)
          // seta cookie se for login
          setCookie(res, "token", response.result.token, {
            path: "/",
            maxAge: 36000, // 10 horas
          });
        break;
      case "logout":
        // reseta cookie se for logout
        resetCookie(res, "token");
        break;

      default:
        break;
    }
    res.status(200).json(response);
  } else {
    res.status(204);
  }
});
