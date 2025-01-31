import pgknex from "../utils/knex";
import { FastifyRequest } from "fastify";
import { Blueprint } from "../dto/blueprints";
import { handleQueryError } from "../utils/error/query";

export interface ListBlueprintsQuery {
  version?: string;
  author?: string;
}

export interface GetBlueprintByIdQuery {
  id: string;
}

export const ListBlueprints = (
  request: FastifyRequest<{ Querystring: ListBlueprintsQuery }>,
) => {
  const { version, author } = request.query;
  let query = pgknex.select("*");

  if (version) {
    query = query.where("version", version);
  }
  if (author) {
    query = query.where("author", author);
  }

  return query.from("blueprints");
};

export const GetBlueprintById = (
  request: FastifyRequest<{ Params: GetBlueprintByIdQuery }>,
) => {
  const { id } = request.params;

  if (!id) {
    handleQueryError(new Error("Missing required fields"), "GetBlueprintById");
  }

  return pgknex.select("*").from("blueprints").where("id", id).first();
};

export const CreateBlueprint = (
  request: FastifyRequest<{ Body: Blueprint }>,
) => {
  const { name, version, author, blueprint_data } = request.body;

  if (!name || !version || !author || !blueprint_data) {
    handleQueryError(new Error("Missing required fields"), "CreateBlueprint");
  }

  return pgknex("blueprints").insert({
    name,
    version,
    author,
    blueprint_data,
  });
};

export const UpdateBlueprintById = (
  request: FastifyRequest<{
    Params: GetBlueprintByIdQuery;
    Body: Partial<Blueprint>;
  }>,
) => {
  const { id } = request.params;
  const updateData = request.body;

  if (!Object.keys(updateData).length) {
    handleQueryError(
      new Error("No update data provided"),
      "UpdateBlueprintById",
    );
  }

  if (!id) {
    handleQueryError(
      new Error("Missing required fields"),
      "UpdateBlueprintById",
    );
  }

  return pgknex("blueprints").where("id", id).update(updateData).returning("*");
};

export const DeleteBlueprintById = (
  request: FastifyRequest<{ Params: GetBlueprintByIdQuery }>,
) => {
  const { id } = request.params;

  if (!id) {
    handleQueryError(
      new Error("Missing required fields"),
      "DeleteBlueprintById",
    );
  }

  return pgknex("blueprints").where("id", id).del().returning("*");
};
