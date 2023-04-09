import { FastifyPluginCallback } from "fastify";

export const teste: FastifyPluginCallback = (fastify, options, done) => {
  fastify.get("/teste", (request, reply) => {
    reply.send({ resp: "teste", token: request.cookies.token || "" });
  });
  done();
};
