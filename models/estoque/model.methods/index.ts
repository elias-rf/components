import type { Knex } from "knex";
//--
import { TTableDef } from "@mono/types";
import { increment } from "./increment";

export function estoqueMethods(connection: Knex, table: TTableDef) {
  return {
    mutation: {
      increment: increment(connection, table),
    },
  };
}
