import { TDb } from "../../types";

// @index(['./**/*.schema.ts'], (f, _) => `import { ${_.snakeCase(f.name.slice(0,-7))} } from "${f.path}";`)
import { agenda_telefone } from "../../schema/agenda_telefone.schema";
import { cidade } from "../../schema/cidade.schema";
import { cliente } from "../../schema/cliente.schema";
import { diamante } from "../../schema/diamante.schema";
import { empregado } from "../../schema/empregado.schema";
import { esterilizacao_externa } from "../../schema/esterilizacao_externa.schema";
import { esterilizacao_interna } from "../../schema/esterilizacao_interna.schema";
import { estoque } from "../../schema/estoque.schema";
import { etiqueta_externa } from "../../schema/etiqueta_externa.schema";
import { etiqueta_interna } from "../../schema/etiqueta_interna.schema";
import { fornecedor } from "../../schema/fornecedor.schema";
import { group_subject } from "../../schema/group-subject.schema";
import { maquina } from "../../schema/maquina.schema";
import { nf_cfop } from "../../schema/nf-cfop.schema";
import { nf_entrada_controle } from "../../schema/nf-entrada-controle.schema";
import { nf_entrada_item } from "../../schema/nf-entrada-item.schema";
import { nf_entrada_log } from "../../schema/nf-entrada-log.schema";
import { nf_entrada } from "../../schema/nf-entrada.schema";
import { nf_saida_fv } from "../../schema/nf-saida-fv.schema";
import { nf_saida_item } from "../../schema/nf-saida-item.schema";
import { nf_saida } from "../../schema/nf-saida.schema";
import { operacao_producao } from "../../schema/operacao-producao.schema";
import { ordem_producao_operacao } from "../../schema/ordem-producao-operacao.schema";
import { ordem_producao } from "../../schema/ordem-producao.schema";
import { pagar } from "../../schema/pagar.schema";
import { pedido_item } from "../../schema/pedido-item.schema";
import { pedido } from "../../schema/pedido.schema";
import { produto_categoria } from "../../schema/produto-categoria.schema";
import { produto_estatistica } from "../../schema/produto-estatistica.schema";
import { produto_item } from "../../schema/produto-item.schema";
import { produto } from "../../schema/produto.schema";
import { produto_controle } from "../../schema/produto_controle.schema";
import { produto_plano } from "../../schema/produto_plano.schema";
import { usuario } from "../../schema/usuario.schema";
import { vendedor_meta } from "../../schema/vendedor-meta.schema";
import { vendedor } from "../../schema/vendedor.schema";
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
  usuario,
  vendedor_meta,
  vendedor,
  // @endindex
};
