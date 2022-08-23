import { TEntitySchema } from "@er/types/*";

// @index(['./**/*.schema.ts'], (f, _) => `import { ${_.snakeCase(f.name.slice(0,-7))} } from "${f.path}";`)
import { agenda_telefone } from "./agenda-telefone.schema";
import { cidade } from "./cidade.schema";
import { cliente } from "./cliente.schema";
import { diamante } from "./diamante.schema";
import { esterilizacao_externa } from "./esterilizacao_externa.schema";
import { esterilizacao_interna } from "./esterilizacao_interna.schema";
import { estoque } from "./estoque.schema";
import { etiqueta_externa } from "./etiqueta_externa.schema";
import { etiqueta_interna } from "./etiqueta_interna.schema";
import { maquina } from "./maquina.schema";
import { nf_saida_fv } from "./nf_saida_fv.schema";
// @endindex

export const entitySchema: TEntitySchema = {
  // @index(['./**/*.schema.ts'], (f, _) => `${_.snakeCase(f.name.slice(0,-7))},`)
  agenda_telefone,
  cidade,
  cliente,
  diamante,
  esterilizacao_externa,
  esterilizacao_interna,
  estoque,
  etiqueta_externa,
  etiqueta_interna,
  maquina,
  nf_saida_fv,
  // @endindex
};
