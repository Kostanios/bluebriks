import fastify from "fastify";
import router from "./router";

const server = fastify({
  logger: process.env.NODE_ENV !== "development",
});

server.register(router);

export default server;
