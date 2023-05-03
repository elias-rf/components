import { config } from "@/config";
import { FastifyPluginCallback } from "fastify";

export const systemRoute: FastifyPluginCallback = (fastify, options, done) => {
  fastify.get("/system", (request, reply) => {
    reply.send({
      enviroment: process.env.NODE_ENV,
      config,
      token: request.cookies.token || "",
    });
  });
  done();
};
