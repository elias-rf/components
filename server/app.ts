import cookie from "@fastify/cookie";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import Fastify from "fastify";
import { config } from "./config";
import { routes } from "./routes";

declare module "express-serve-static-core" {
  interface Request {
    currentUser?: boolean;
  }
}

export const app = Fastify({ maxParamLength: 5000, logger: true });

app.register(cors, { origin: "*" });
app.register(cookie);
app.register(jwt, {
  secret: config.auth.secret,
  sign: { expiresIn: config.auth.expiration },
  cookie: {
    cookieName: "token",
    signed: false,
  },
});
app.addHook("onRequest", async (request, reply) => {
  try {
    await request.jwtVerify();
  } catch (err) {
    // app.log.error(err);
  }
});

app.register(routes);
