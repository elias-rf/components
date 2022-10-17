import express from "express";
import { router as rpcRouter } from "./rpc.router";

export const router = express.Router();

router.use("/api/rpc", rpcRouter);
