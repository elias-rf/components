import express from "express";
import { trpcMiddle } from "./trpc";

export const router = express.Router();

router.use("/api/trpc", trpcMiddle);
