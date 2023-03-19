import type { Knex } from "knex";
import type { TTable } from "../../../types/model";
import { TCrud } from "./crud.type";
import { methods } from "./methods";

export function crudFactory(connection: Knex, table: TTable): TCrud {
  return {
    ...methods(connection, table),
  };
}

export type TCrudFactory = typeof crudFactory;

// export type TCrud = ReturnType<TCrudFactory>;
