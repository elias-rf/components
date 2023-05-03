// import { trpcMiddle } from "./trpc";

import { FastifyPluginCallback } from "fastify";
import { systemRoute } from "./system";
import { trpcRoute } from "./trpc";

const prefix = "/api";
export const routes: FastifyPluginCallback = (fastify, options, done) => {
  fastify.register(systemRoute, { prefix });
  fastify.register(trpcRoute, { prefix });
  done();
};
