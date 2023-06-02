//--
import { schemaDiario } from "./shema-diario";
import { schemaMensal } from "./shema-mensal";
import { schemaModelo } from "./shema-modelo";
import { schemaProduto } from "./shema-produto";

export function esterilizacaoExternaMethods() {
  return {
    query: {
      schemaDiario,
      schemaMensal,
      schemaProduto,
      schemaModelo,
    },
    mutation: {},
  };
}
