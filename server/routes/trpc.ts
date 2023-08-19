import { appRouter } from "@/rpc/app-router";
import { createContext } from "@/rpc/utils/context-server";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import type { FastifyPluginCallback } from "fastify";

export const trpcRoute: FastifyPluginCallback = (fastify, options, done) => {
  fastify.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: { router: appRouter, createContext },
  });

  done();
};
