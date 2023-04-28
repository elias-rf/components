import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { FastifyPluginCallback } from "fastify";
import { appRouter } from "../../models/app-router";
import { createContext } from "../../utils/trpc/context-server";

export const trpcRoute: FastifyPluginCallback = (fastify, options, done) => {
  fastify.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: { router: appRouter, createContext },
  });

  done();
};
