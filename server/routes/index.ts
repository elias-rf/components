// import { trpcMiddle } from "./trpc";

import { FastifyPluginCallback } from "fastify";
import { testeRoute } from "./teste";
import { trpcRoute } from "./trpc";

const prefix = "/api";
export const routes: FastifyPluginCallback = (fastify, options, done) => {
  fastify.register(testeRoute, { prefix });
  fastify.register(trpcRoute, { prefix });
  done();
};

// router.use("/api/trpc", trpcMiddle);
