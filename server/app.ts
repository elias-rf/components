// import cookieParser from "cookie-parser";
// import cors from "cors";
import Fastify, { RouteShorthandOptions } from "fastify";
// import { join } from "path";
// import { logger } from "../utils/logger";
// import { config } from "./config";
// import { errMiddle } from "./middleware/err-middle";
// import { jwtMiddleFactory } from "./middleware/jwt-middle";
// import { loggerMiddleFactory } from "./middleware/logger-middle";
import { routes } from "./routes";

export const app = Fastify({ maxParamLength: 5000, logger: true });

declare module "express-serve-static-core" {
  interface Request {
    currentUser?: boolean;
  }
}

// app.use(express.json());
// app.use(cookieParser(config.auth.secret));
// app.use(jwtMiddleFactory(config.auth.secret || ""));
// app.use(loggerMiddleFactory(logger));
// app.use(cors());
// app.options("*", cors());
// app.use(express.static(join(__dirname, "../../public")));
// app.get("/api", (req, res) => {
//   res.send("ok");
// });

// app.use(router);

// app.use(errMiddle);

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          pong: {
            type: "string",
          },
        },
      },
    },
  },
};

app.register(routes);

app.get("/ping", opts, async (request, reply) => {
  return { pong: "it worked!" };
});
