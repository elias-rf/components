import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { FastifyPluginCallback } from "fastify";
import { appRouter } from "../../model/app-router";
import { createContext } from "../../utils/trpc/context-server";

export const trpc: FastifyPluginCallback = (fastify, options, done) => {
  fastify.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: { router: appRouter, createContext },
  });

  done();
};
