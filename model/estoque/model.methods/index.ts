import type { Knex } from "knex";
//--
import { TTableDef } from "../../../types";
import { increment } from "./increment";

export function esterilizacaoInternaMethods(
  connection: Knex,
  table: TTableDef
) {
  return {
    query: {
      increment: increment(connection, table),
    },
  };
}
