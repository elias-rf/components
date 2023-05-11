import { TConnection } from "@/config/connections";
import type { TTableDef } from "@/types";
import { methods } from "./methods";

export function crudFactory(connection: TConnection, table: TTableDef) {
  return {
    ...methods(connection, table),
  };
}

export type TCrud = ReturnType<typeof crudFactory>;
