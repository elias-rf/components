import type { Knex } from "knex";
import type { TTable } from "../../../types";
import { methods } from "./methods";

export function crudFactory(connection: Knex, table: TTable) {
  return {
    ...methods(connection, table),
  };
}

export type TCrudFactory = typeof crudFactory;

export type TCrud = ReturnType<TCrudFactory>;
