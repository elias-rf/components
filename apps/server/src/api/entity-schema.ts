import { TEntitySchema } from "@er/types/*";

// @index(['./**/*.schema.ts'], (f, _) => `import { ${_.snakeCase(f.name.slice(0,-7))} } from "${f.path}";`)
import { agenda_telefone } from "./agenda-telefone/agenda-telefone.schema";
import { cidade } from "./cidade/cidade.schema";
import { cliente } from "./cliente/cliente.schema";
import { diamante } from "./diamante/diamante.schema";
import { empregado } from "./empregado/empregado.schema";
import { esterilizacao_externa } from "./esterilizacao-externa/esterilizacao-externa.schema";
import { esterilizacao_interna } from "./esterilizacao-interna/esterilizacao-interna.schema";
import { estoque } from "./estoque/estoque.schema";
import { etiqueta_externa } from "./etiqueta-externa/etiqueta-externa.schema";
import { etiqueta_interna } from "./etiqueta-interna/etiqueta-interna.schema";
import { fornecedor } from "./fornecedor/fornecedor.schema";
import { group_subject } from "./group-subject/group-subject.schema";
import { maquina } from "./maquina/maquina.schema";
import { nf_cfop } from "./nf-cfop/nf-cfop.schema";
import { nf_entrada_controle } from "./nf-entrada-controle/nf-entrada-controle.schema";
import { nf_entrada_item } from "./nf-entrada-item/nf-entrada-item.schema";
import { nf_entrada_log } from "./nf-entrada-log/nf-entrada-log.schema";
import { nf_entrada } from "./nf-entrada/nf-entrada.schema";
import { nf_saida_fv } from "./nf-saida-fv/nf-saida-fv.schema";
import { nf_saida_item } from "./nf-saida-item/nf-saida-item.schema";
import { nf_saida } from "./nf-saida/nf-saida.schema";
import { operacao_producao } from "./operacao-producao/operacao-producao.schema";
import { ordem_producao_operacao } from "./ordem-producao-operacao/ordem-producao-operacao.schema";
import { ordem_producao } from "./ordem-producao/ordem-producao.schema";
import { pagar } from "./pagar/pagar.schema";
import { pedido_item } from "./pedido-item/pedido-item.schema";
import { pedido } from "./pedido/pedido.schema";
import { produto_categoria } from "./produto-categoria/produto-categoria.schema";
import { produto_controle } from "./produto-controle/produto_controle.schema";
import { produto_estatistica } from "./produto-estatistica/produto-estatistica.schema";
import { produto_item } from "./produto-item/produto-item.schema";
import { produto_plano } from "./produto-plano/produto_plano.schema";
import { produto } from "./produto/produto.schema";
import { usuario } from "./usuario/usuario.schema";
import { vendedor_meta } from "./vendedor-meta/vendedor-meta.schema";
import { vendedor } from "./vendedor/vendedor.schema";
// @endindex

export const entitySchema: TEntitySchema = {
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
  usuario,
  vendedor_meta,
  vendedor,
  // @endindex
};
