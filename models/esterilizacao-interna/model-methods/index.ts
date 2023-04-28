import type { Knex } from "knex";
//--
import { diario } from "./diario";
import { mensal } from "./mensal";
import { modelo } from "./modelo";
import { produto } from "./produto";
import { schemaDiario } from "./shema-diario";
import { schemaMensal } from "./shema-mensal";
import { schemaModelo } from "./shema-modelo";
import { schemaProduto } from "./shema-produto";

export function esterilizacaoInternaMethods(connection: Knex) {
  return {
    query: {
      schemaDiario,
      schemaMensal,
      schemaProduto,
      schemaModelo,
      produto: produto(connection),
      modelo: modelo(connection),
      diario: diario(connection),
      mensal: mensal(connection),
    },
  };
}
