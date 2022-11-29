import type { Request, Response } from "express";
import express from "express";
import { TCurrentUser } from "../../types";
import { jwtDecode } from "../../utils/api/jwt-decode";
import { resetCookie, setCookie } from "../../utils/network/cookie";
import { TRpcRequest } from "../../utils/rpc/rpc-server";
import { rpc } from "../api/rpc";
import { config } from "../config";
import { connections } from "../dal/connections";

export const router = express.Router();

function getCurrentUser(req: Request) {
  const { cookies } = req;
  const token = cookies.token;
  const currentUser = token ? jwtDecode(token, config.auth.secret || "") : {};
  return currentUser as TCurrentUser;
}

router.get("/", async (req: Request, res: Response) => {
  const { query } = req;
  let rpcCall = {} as TRpcRequest;

  if (query.rpc !== undefined) {
    rpcCall = JSON.parse(query.rpc as string);
  }
  const currentUser = getCurrentUser(req);
  const ctx = {
    currentUser,
    connections,
  };

  const response = await rpc.runQuery(rpcCall, ctx);

  if (response) {
    switch (rpcCall?.method) {
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
    res.status(204).json({});
  }
});

router.post("/", async (req: Request, res: Response) => {
  const { body } = req;
  const currentUser = getCurrentUser(req);
  const response = await rpc.runMutation(body, {
    currentUser,
    connections,
  });
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
    res.status(204).json({});
  }
});
