import { TConnection } from "@mono/models/connections";
import type { TTableDef } from "@mono/types";
import type { TCrud } from "./crud.type";
import { methods } from "./methods";

export function crudFactory(connection: TConnection, table: TTableDef): TCrud {
  return {
    ...methods(connection, table),
  };
}

export type TCrudFactory = typeof crudFactory;
