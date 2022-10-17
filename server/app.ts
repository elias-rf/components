import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { join } from "path";
import { config } from "./config";
import { router } from "./routes";

export const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(join(__dirname, "../../public")));
app.use(cookieParser(config.auth.secret));
app.get("/api", (req, res) => {
  res.send("ok");
});

app.use(router);
