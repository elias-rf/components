import { TDb } from "../types";

// // index(['./**/*.schema.ts','!./**/*.spec.ts'], (f, _) => `export * from "${f.path}";`)
// export * from "./agenda_telefone.schema";
// export * from "./cidade.schema";
// export * from "./cliente.schema";
// export * from "./diamante.schema";
// export * from "./empregado.schema";
// export * from "./esterilizacao_externa.schema";
// export * from "./esterilizacao_interna.schema";
// export * from "./estoque.schema";
// export * from "./etiqueta_externa.schema";
// export * from "./etiqueta_interna.schema";
// export * from "./fornecedor.schema";
// export * from "./group-subject.schema";
// export * from "./maquina.schema";
// export * from "./nf-cfop.schema";
// export * from "./nf-entrada-controle.schema";
// export * from "./nf-entrada-item.schema";
// export * from "./nf-entrada-log.schema";
// export * from "./nf-entrada.schema";
// export * from "./nf-saida-fv.schema";
// export * from "./nf-saida-item.schema";
// export * from "./nf-saida.schema";
// export * from "./operacao-producao.schema";
// export * from "./ordem-producao-operacao.schema";
// export * from "./ordem-producao.schema";
// export * from "./pagar.schema";
// export * from "./pedido-item.schema";
// export * from "./pedido.schema";
// export * from "./produto-categoria.schema";
// export * from "./produto-estatistica.schema";
// export * from "./produto-item.schema";
// export * from "./produto.schema";
// export * from "./produto_controle.schema";
// export * from "./produto_plano.schema";
// export * from "./receber.schema";
// export * from "./usuario.schema";
// export * from "./vendedor-meta.schema";
// export * from "./vendedor.schema";
// // endindex

// @index(['./**/*.schema.ts'], (f, _) => `import { ${_.snakeCase(f.name.slice(0,-7))} } from "${f.path}";`)
import { agenda_telefone } from "./agenda_telefone.schema";
import { cidade } from "./cidade.schema";
import { cliente } from "./cliente.schema";
import { diamante } from "./diamante.schema";
import { empregado } from "./empregado.schema";
import { esterilizacao_externa } from "./esterilizacao_externa.schema";
import { esterilizacao_interna } from "./esterilizacao_interna.schema";
import { estoque } from "./estoque.schema";
import { etiqueta_externa } from "./etiqueta_externa.schema";
import { etiqueta_interna } from "./etiqueta_interna.schema";
import { fornecedor } from "./fornecedor.schema";
import { group_subject } from "./group-subject.schema";
import { maquina } from "./maquina.schema";
import { nf_cfop } from "./nf-cfop.schema";
import { nf_entrada_controle } from "./nf-entrada-controle.schema";
import { nf_entrada_item } from "./nf-entrada-item.schema";
import { nf_entrada_log } from "./nf-entrada-log.schema";
import { nf_entrada } from "./nf-entrada.schema";
import { nf_saida_fv } from "./nf-saida-fv.schema";
import { nf_saida_item } from "./nf-saida-item.schema";
import { nf_saida } from "./nf-saida.schema";
import { operacao_producao } from "./operacao-producao.schema";
import { ordem_producao_operacao } from "./ordem-producao-operacao.schema";
import { ordem_producao } from "./ordem-producao.schema";
import { pagar } from "./pagar.schema";
import { pedido_item } from "./pedido-item.schema";
import { pedido } from "./pedido.schema";
import { produto_categoria } from "./produto-categoria.schema";
import { produto_controle } from "./produto-controle.schema";
import { produto_estatistica } from "./produto-estatistica.schema";
import { produto_item } from "./produto-item.schema";
import { produto_plano } from "./produto-plano.schema";
import { produto } from "./produto.schema";
import { receber } from "./receber.schema";
import { usuario } from "./usuario.schema";
import { vendedor_meta } from "./vendedor-meta.schema";
import { vendedor } from "./vendedor.schema";
// @endindex

export const db: TDb = {
  // @index(['./**/*.schema.ts'], (f, _) => `${_.snakeCase(f.name.slice(0,-7))},`)
  agenda_telefone,
  cidade,
  cliente,
  diamante,
  empregado,
  esterilizacao_externa,
  esterilizacao_interna,
  estoque,
  etiqueta_externa,
  etiqueta_interna,
  fornecedor,
  group_subject,
  maquina,
  nf_cfop,
  nf_entrada_controle,
  nf_entrada_item,
  nf_entrada_log,
  nf_entrada,
  nf_saida_fv,
  nf_saida_item,
  nf_saida,
  operacao_producao,
  ordem_producao_operacao,
  ordem_producao,
  pagar,
  pedido_item,
  pedido,
  produto_controle,
  produto_plano,
  produto_categoria,
  produto_estatistica,
  produto_item,
  produto,
  receber,
  usuario,
  vendedor_meta,
  vendedor,
  // @endindex
};
