import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  DB_HOST = "0.0.0.0",
  DB_NAME = "postgres",
} = process.env;

const pgknex = knex({
  client: "pg",
  connection: `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${DB_HOST}:5432/${DB_NAME}`,
  searchPath: ["knex", "public"],
});

export default pgknex;
