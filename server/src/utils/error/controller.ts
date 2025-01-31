import { FastifyReply } from "fastify";

export const handleControllerError = (
  error: Error,
  reply: FastifyReply,
  controllerName: string,
) => {
  console.error(error);
  const message = error.message || "Internal Server Error";
  const log = `CONTROLLER ${controllerName} ERROR: ${message}`;
  console.error(log);
  reply.status(500).send({ error: message });
};
