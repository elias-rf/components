import { appRouter } from "@mono/models/app-router";
import { createContext } from "@mono/utils/trpc/context-server";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { FastifyPluginCallback } from "fastify";

export const trpcRoute: FastifyPluginCallback = (fastify, options, done) => {
  fastify.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: { router: appRouter, createContext },
  });

  done();
};
