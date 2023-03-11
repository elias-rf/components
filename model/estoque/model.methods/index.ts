import type { Knex } from "knex";
//--
import { TTable } from "../../../types";
import { increment } from "./increment";

export function esterilizacaoInternaMethods(connection: Knex, table: TTable) {
  return {
    query: {
      increment: increment(connection, table),
    },
  };
}
