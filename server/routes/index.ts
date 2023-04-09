// import { trpcMiddle } from "./trpc";

import {  FastifyPluginCallback } from "fastify";
import { teste } from "./teste";
import { trpc } from "./trpc";

const prefix = "/api";
export const routes: FastifyPluginCallback = (
  fastify,
  options, 
  done
) => {
  fastify.register(teste, { prefix });
  fastify.register(trpc, { prefix });
  done();
};

// router.use("/api/trpc", trpcMiddle);
