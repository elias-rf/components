import type { TConnection, TTableDef } from "../../../types/model";
import { TCrud } from "./crud.type";
import { methods } from "./methods";

export function crudFactory(connection: TConnection, table: TTableDef): TCrud {
  return {
    ...methods(connection, table),
  };
}

export type TCrudFactory = typeof crudFactory;

// export type TCrud = ReturnType<TCrudFactory>;
