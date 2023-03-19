import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { join } from "path";
import { logger } from "../utils/logger";
import { config } from "./config";
import { errMiddle } from "./middleware/err-middle";
import { jwtMiddleFactory } from "./middleware/jwt-middle";
import { loggerMiddleFactory } from "./middleware/logger-middle";
import { router } from "./routes";

export const app = express();

declare module "express-serve-static-core" {
  interface Request {
    currentUser?: boolean;
  }
}

app.use(express.json());
app.use(cookieParser(config.auth.secret));
app.use(jwtMiddleFactory(config.auth.secret || ""));
app.use(loggerMiddleFactory(logger));
app.use(cors());
app.use(express.static(join(__dirname, "../../public")));
app.get("/api", (req, res) => {
  res.send("ok");
});

app.use(router);

app.use(errMiddle);
