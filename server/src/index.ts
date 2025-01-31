import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const FASTIFY_PORT = Number(process.env.FASTIFY_PORT) || 3006;
const FASTIFY_HOST = process.env.FASTIFY_ADDRESS || "0.0.0.0";

const start = async () => {
  try {
    await app.listen({
      port: FASTIFY_PORT,
      host: FASTIFY_HOST,
    });
    console.log(`🚀 Server running on http://${FASTIFY_HOST}:${FASTIFY_PORT}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
