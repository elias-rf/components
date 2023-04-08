import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { FastifyInstance } from "fastify";
import { appRouter } from "../../model/app-router";
import { createContext } from "../../utils/trpc/context-server";

export function trpc(fastify: FastifyInstance, options, done) {
  fastify.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: { router: appRouter, createContext },
  });
  done();
}
