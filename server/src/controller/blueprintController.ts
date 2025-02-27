import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

import {
  CreateBlueprint,
  DeleteBlueprintById,
  GetBlueprintById,
  GetBlueprintByIdQuery,
  ListBlueprints,
  ListBlueprintsQuery,
  UpdateBlueprintById,
} from "../query/blueprint";
import { handleControllerError } from "../utils/error/controller";
import { Blueprint } from "../dto/blueprints";

export default async function blueprintsController(fastify: FastifyInstance) {
  // GET /api/v1/blueprint
  fastify.get("/", async (request, reply: FastifyReply) => {
    try {
      const blueprints = await ListBlueprints(
        request as FastifyRequest<{ Querystring: ListBlueprintsQuery }>,
      );
      reply.send({ data: blueprints });
    } catch (e) {
      const error = e as Error;
      handleControllerError(error, reply, "listBlueprintsController");
    }
  });

  // GET /api/v1/blueprint:id
  fastify.get("/:id", async (request, reply: FastifyReply) => {
    try {
      const blueprint = await GetBlueprintById(
        request as FastifyRequest<{ Params: GetBlueprintByIdQuery }>,
      );

      if (!blueprint) {
        return reply.status(404).send({ error: "Blueprint not found" });
      }

      reply.send({ data: blueprint });
    } catch (e) {
      const error = e as Error;
      handleControllerError(error, reply, "getBlueprintController");
    }
  });

  // POST /api/v1/blueprint
  fastify.post("/", async (request, reply: FastifyReply) => {
    try {
      await CreateBlueprint(
        request as FastifyRequest<{ Body: Blueprint }>,
      );
      reply.send({ data: request.body });
    } catch (e) {
      const error = e as Error;
      handleControllerError(error, reply, "createBlueprintsController");
    }
  });

  // PUT /api/v1/blueprint:id
  fastify.put("/:id", async (request, reply: FastifyReply) => {
    try {
      const [blueprint] = await UpdateBlueprintById(
        request as FastifyRequest<{
          Params: GetBlueprintByIdQuery;
          Body: Partial<Blueprint>;
        }>,
      );

      if (!blueprint) {
        return reply.status(404).send({ error: "Blueprint not found" });
      }

      reply.send({ data: blueprint });
    } catch (e) {
      const error = e as Error;
      handleControllerError(error, reply, "updateBlueprintsController");
    }
  });

  // DELETE /api/v1/blueprint:id
  fastify.delete("/:id", async (request, reply: FastifyReply) => {
    try {
      const [blueprint] = await DeleteBlueprintById(
        request as FastifyRequest<{
          Params: GetBlueprintByIdQuery;
          Body: Partial<Blueprint>;
        }>,
      );

      if (!blueprint) {
        return reply.status(404).send({ error: "Blueprint not found" });
      }

      reply.send({ data: blueprint });
    } catch (e) {
      const error = e as Error;
      handleControllerError(error, reply, "updateBlueprintsController");
    }
  });
}
