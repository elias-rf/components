import { TEntitySchema } from "@er/types/*";

// @index(['./**/*.schema.ts'], (f, _) => `import { ${_.snakeCase(f.name.slice(0,-7))} } from "${f.path}";`)
import { agenda_telefone } from "../api/agenda-telefone/agenda-telefone.schema";
import { cidade } from "../api/cidade/cidade.schema";
import { cliente } from "../api/cliente/cliente.schema";
import { diamante } from "../api/diamante/diamante.schema";
import { empregado } from "../api/empregado/empregado.schema";
import { esterilizacao_externa } from "../api/esterilizacao-externa/esterilizacao-externa.schema";
import { esterilizacao_interna } from "../api/esterilizacao-interna/esterilizacao-interna.schema";
import { estoque } from "../api/estoque/estoque.schema";
import { etiqueta_externa } from "../api/etiqueta-externa/etiqueta-externa.schema";
import { etiqueta_interna } from "../api/etiqueta-interna/etiqueta-interna.schema";
import { fornecedor } from "../api/fornecedor/fornecedor.schema";
import { group_subject } from "../api/group-subject/group-subject.schema";
import { maquina } from "../api/maquina/maquina.schema";
import { nf_cfop } from "../api/nf-cfop/nf-cfop.schema";
import { nf_entrada_controle } from "../api/nf-entrada-controle/nf-entrada-controle.schema";
import { nf_entrada_item } from "../api/nf-entrada-item/nf-entrada-item.schema";
import { nf_entrada_log } from "../api/nf-entrada-log/nf-entrada-log.schema";
import { nf_entrada } from "../api/nf-entrada/nf-entrada.schema";
import { nf_saida_fv } from "../api/nf-saida-fv/nf-saida-fv.schema";
import { nf_saida_item } from "../api/nf-saida-item/nf-saida-item.schema";
import { nf_saida } from "../api/nf-saida/nf-saida.schema";
import { operacao_producao } from "../api/operacao-producao/operacao-producao.schema";
import { ordem_producao_operacao } from "../api/ordem-producao-operacao/ordem-producao-operacao.schema";
import { ordem_producao } from "../api/ordem-producao/ordem-producao.schema";
import { pagar } from "../api/pagar/pagar.schema";
import { pedido_item } from "../api/pedido-item/pedido-item.schema";
import { pedido } from "../api/pedido/pedido.schema";
import { produto_categoria } from "../api/produto-categoria/produto-categoria.schema";
import { produto_controle } from "../api/produto-controle/produto_controle.schema";
import { produto_estatistica } from "../api/produto-estatistica/produto-estatistica.schema";
import { produto_item } from "../api/produto-item/produto-item.schema";
import { produto_plano } from "../api/produto-plano/produto_plano.schema";
import { produto } from "../api/produto/produto.schema";
import { usuario } from "../api/usuario/usuario.schema";
import { vendedor_meta } from "../api/vendedor-meta/vendedor-meta.schema";
import { vendedor } from "../api/vendedor/vendedor.schema";
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
