import express from "express";
import { router as rpcRouter } from "./rpc.router";
import { trpcMiddle } from "./trpc";

export const router = express.Router();

router.use("/api/trpc", trpcMiddle);
router.use("/api/rpc", rpcRouter);
