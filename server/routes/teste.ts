import { FastifyPluginCallback } from "fastify";

export const testeRoute: FastifyPluginCallback = (fastify, options, done) => {
  fastify.get("/teste", (request, reply) => {
    reply.send({ resp: "teste", token: request.cookies.token || "" });
  });
  done();
};
