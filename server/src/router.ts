import { FastifyInstance } from "fastify";

import blueprintsController from "./controller/blueprintController";
import indexController from "./controller/indexController";

export default async function router(fastify: FastifyInstance) {
  fastify.register(blueprintsController, { prefix: "/api/v1/blueprint" });
  fastify.register(indexController, { prefix: "/" });
}
