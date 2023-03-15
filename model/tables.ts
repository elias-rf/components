import { TDb } from "../types/model";

// @index(['./**/*.table.ts'], (f, _) => `import { ${_.snakeCase(f.name.slice(0,-6))} } from "${f.path}";`)
import { agenda_telefone } from "./agenda-telefone/agenda-telefone.table";
import { cidade } from "./cidade/cidade.table";
import { cliente } from "./cliente/cliente.table";
import { diamante } from "./diamante/diamante.table";
import { empregado } from "./empregado/empregado.table";
import { esterilizacao_externa } from "./esterilizacao-externa/esterilizacao-externa.table";
import { esterilizacao_interna } from "./esterilizacao-interna/esterilizacao-interna.table";
import { estoque } from "./estoque/estoque.table";
import { etiqueta_externa } from "./etiqueta-externa/etiqueta-externa.table";
import { etiqueta_interna } from "./etiqueta-interna/etiqueta-interna.table";
import { fornecedor } from "./fornecedor/fornecedor.table";
import { group_subject } from "./group-subject/group-subject.table";
import { maquina } from "./maquina/maquina.table";
import { nf_cfop } from "./nf-cfop/nf-cfop.table";
import { nf_entrada_controle } from "./nf-entrada-controle/nf-entrada-controle.table";
import { nf_entrada_item } from "./nf-entrada-item/nf-entrada-item.table";
import { nf_entrada_log } from "./nf-entrada-log/nf-entrada-log.table";
import { nf_entrada } from "./nf-entrada/nf-entrada.table";
import { nf_saida_fv } from "./nf-saida-fv/nf-saida-fv.table";
import { nf_saida_item } from "./nf-saida-item/nf-saida-item.table";
import { nf_saida } from "./nf-saida/nf-saida.table";
import { operacao_producao } from "./operacao-producao/operacao-producao.table";
import { ordem_producao_operacao } from "./ordem-producao-operacao/ordem-producao-operacao.table";
import { ordem_producao } from "./ordem-producao/ordem-producao.table";
import { pagar } from "./pagar/pagar.table";
import { pedido_item } from "./pedido-item/pedido-item.table";
import { pedido } from "./pedido/pedido.table";
import { produto_categoria } from "./produto-categoria/produto-categoria.table";
import { produto_controle } from "./produto-controle/produto-controle.table";
import { produto_estatistica } from "./produto-estatistica/produto-estatistica.table";
import { produto_item } from "./produto-item/produto-item.table";
import { produto_plano } from "./produto-plano/produto-plano.table";
import { produto } from "./produto/produto.table";
import { receber } from "./receber/receber.table";
import { usuario } from "./usuario/usuario.table";
import { vendedor_meta } from "./vendedor-meta/vendedor-meta.table";
import { vendedor } from "./vendedor/vendedor.table";
// @endindex

export const tables: TDb = {
  // @index(['./**/*.table.ts'], (f, _) => `${_.snakeCase(f.name.slice(0,-6))},`)
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
  produto_categoria,
  produto_controle,
  produto_estatistica,
  produto_item,
  produto_plano,
  produto,
  receber,
  usuario,
  vendedor_meta,
  vendedor,
  // @endindex
};
