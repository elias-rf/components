import type { Knex } from "knex";
//--
import { diario } from "./diario";
import { diarioSchema } from "./diario-schema";
import { mensal } from "./mensal";
import { mensalSchema } from "./mensal-schema";
import { modelo } from "./modelo";
import { modeloSchema } from "./modelo-schema";
import { produto } from "./produto";
import { produtoSchema } from "./produto-schema";
import { turno } from "./turno";
import { turnoSchema } from "./turno-schema";

export function ordemProducaoOperacaoMethods(connection: Knex) {
  return {
    query: {
      diario: diario(connection),
      diarioSchema: diarioSchema(),
      mensal: mensal(connection),
      mensalSchema: mensalSchema(),
      modelo: modelo(connection),
      modeloSchema: modeloSchema(),
      produto: produto(connection),
      produtoSchema: produtoSchema(),
      turno: turno(connection),
      turnoSchema: turnoSchema(),
    },
  };
}
