import { TConnection } from "@/config/connections";
import type { TTableDef } from "@/types";
import type { TCrud } from "./crud.type";
import { methods } from "./methods";

export function crudFactory(connection: TConnection, table: TTableDef): TCrud {
  return {
    ...methods(connection, table),
  };
}

export type TCrudFactory = typeof crudFactory;
