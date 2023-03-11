import type { Request, Response } from "express";
import express from "express";
import { TRpcRequest } from "../../types";
import { resetCookie, setCookie } from "../../utils/network/cookie";

import { rpc } from "../api";

export const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const { query, context } = req;
  let rpcCall = {} as TRpcRequest;

  if (query.rpc !== undefined) {
    try {
      rpcCall = JSON.parse(query.rpc as string);
    } catch (error) {
      rpcCall = {} as TRpcRequest;
    }
  }

  const response = await rpc.runQuery(rpcCall, context);

  if (response) {
    res.status(200).json(response);
  } else {
    res.status(204).json({});
  }
});

router.post("/", async (req: Request, res: Response) => {
  const { body, context } = req;

  const response = await rpc.runMutation(body, context);
  if (response) {
    switch (body?.method) {
      case "usuarioLogin":
        if (response.result?.token)
          // seta cookie se for login
          setCookie(res, "token", response.result.token, {
            // path: "/",
            maxAge: 36000, // 10 horas
          });
        break;
      case "usuarioLogout":
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
