import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { join } from "path";
import { logger } from "../utils/logger";
import { config } from "./config";
import { jwtMiddle } from "./middleware/jwt-middle";
import { loggerMiddle } from "./middleware/logger-middle";
import { router } from "./routes";

export const app = express();

app.use(express.json());
app.use(cookieParser(config.auth.secret));
app.use(jwtMiddle(config.auth.secret || ""));
app.use(loggerMiddle(logger));
app.use(cors());
app.use(express.static(join(__dirname, "../../public")));
app.get("/api", (req, res) => {
  res.send("ok");
});

app.use(router);
