import { FastifyInstance } from "fastify";

export function teste(fastify: FastifyInstance, options, done) {
  fastify.get("/teste", (request, reply) => {
    reply.send({ resp: "teste" });
  });
  done();
}
