// import { logger } from "../utils/logger";
import { config } from "../config";
import { app } from "./app";
import "./global";

const start = async () => {
  try {
    await app.listen({ host: "0.0.0.0", port: config.app.port });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
