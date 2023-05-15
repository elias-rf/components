import type { Knex } from "knex";
//--
import { diario } from "./diario";
import { mensal } from "./mensal";
import { modelo } from "./modelo";
import { produto } from "./produto";
import { turno } from "./turno";

export function ordemProducaoOperacaoMethods(connection: Knex) {
  return {
    query: {
      diario: diario(connection),
      mensal: mensal(connection),
      modelo: modelo(connection),
      produto: produto(connection),
      turno: turno(connection),
    },
  };
}
