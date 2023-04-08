// import { trpcMiddle } from "./trpc";

import { FastifyInstance } from "fastify";
import { teste } from "./teste";
import { trpc } from "./trpc";

const prefix = "/api";
export function routes(fastify: FastifyInstance, options, done) {
  fastify.register(teste, { prefix });
  fastify.register(trpc, { prefix });
  done();
}

// router.use("/api/trpc", trpcMiddle);
