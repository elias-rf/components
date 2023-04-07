import { router } from "../utils/trpc/trpc-server";
// @index(['./**/*.trpc.ts'], (f, _) => `import { ${_.camelCase(f.name.slice(0,-4))}Router } from "${f.path}";`)
import { agendaTelefoneRouter } from "./agenda-telefone/agenda-telefone.trpc";
import { cidadeRouter } from "./cidade/cidade.trpc";
import { clienteRouter } from "./cliente/cliente.trpc";
import { diamanteRouter } from "./diamante/diamante.trpc";
import { empregadoRouter } from "./empregado/empregado.trpc";
import { esterilizacaoExternaRouter } from "./esterilizacao-externa/esterilizacao-externa.trpc";
import { esterilizacaoInternaRouter } from "./esterilizacao-interna/esterilizacao-interna.trpc";
import { estoqueRouter } from "./estoque/estoque.trpc";
import { etiquetaExternaRouter } from "./etiqueta-externa/etiqueta-externa.trpc";
import { etiquetaInternaRouter } from "./etiqueta-interna/etiqueta-interna.trpc";
import { fornecedorRouter } from "./fornecedor/fornecedor.trpc";
import { groupSubjectRouter } from "./group-subject/group-subject.trpc";
import { maquinaRouter } from "./maquina/maquina.trpc";
import { nfCfopRouter } from "./nf-cfop/nf-cfop.trpc";
import { nfEntradaControleRouter } from "./nf-entrada-controle/nf-entrada-controle.trpc";
import { nfEntradaItemRouter } from "./nf-entrada-item/nf-entrada-item.trpc";
import { nfEntradaLogRouter } from "./nf-entrada-log/nf-entrada-log.trpc";
import { nfEntradaRouter } from "./nf-entrada/nf-entrada.trpc";
import { nfSaidaFvRouter } from "./nf-saida-fv/nf-saida-fv.trpc";
import { nfSaidaItemRouter } from "./nf-saida-item/nf-saida-item.trpc";
import { nfSaidaRouter } from "./nf-saida/nf-saida.trpc";
import { operacaoProducaoRouter } from "./operacao-producao/operacao-producao.trpc";
import { ordemProducaoOperacaoRouter } from "./ordem-producao-operacao/ordem-producao-operacao.trpc";
import { ordemProducaoRouter } from "./ordem-producao/ordem-producao.trpc";
import { pagarRouter } from "./pagar/pagar.trpc";
import { pedidoItemRouter } from "./pedido-item/pedido-item.trpc";
import { pedidoRouter } from "./pedido/pedido.trpc";
import { produtoCategoriaRouter } from "./produto-categoria/produto-categoria.trpc";
import { produtoControleRouter } from "./produto-controle/produto-controle.trpc";
import { produtoEstatisticaRouter } from "./produto-estatistica/produto-estatistica.trpc";
import { produtoItemRouter } from "./produto-item/produto-item.trpc";
import { produtoPlanoRouter } from "./produto-plano/produto-plano.trpc";
import { produtoRouter } from "./produto/produto.trpc";
import { receberRouter } from "./receber/receber.trpc";
import { usuarioRouter } from "./usuario/usuario.trpc";
import { vendedorMetaRouter } from "./vendedor-meta/vendedor-meta.trpc";
import { vendedorRouter } from "./vendedor/vendedor.trpc";
// @endindex

export const routers = router({
  // @index(['./**/*.trpc.ts'], (f, _) => `${_.camelCase(f.name.slice(0,-4))}: ${_.camelCase(f.name.slice(0,-4))}Router,`)
  agendaTelefone: agendaTelefoneRouter,
  cidade: cidadeRouter,
  cliente: clienteRouter,
  diamante: diamanteRouter,
  empregado: empregadoRouter,
  esterilizacaoExterna: esterilizacaoExternaRouter,
  esterilizacaoInterna: esterilizacaoInternaRouter,
  estoque: estoqueRouter,
  etiquetaExterna: etiquetaExternaRouter,
  etiquetaInterna: etiquetaInternaRouter,
  fornecedor: fornecedorRouter,
  groupSubject: groupSubjectRouter,
  maquina: maquinaRouter,
  nfCfop: nfCfopRouter,
  nfEntradaControle: nfEntradaControleRouter,
  nfEntradaItem: nfEntradaItemRouter,
  nfEntradaLog: nfEntradaLogRouter,
  nfEntrada: nfEntradaRouter,
  nfSaidaFv: nfSaidaFvRouter,
  nfSaidaItem: nfSaidaItemRouter,
  nfSaida: nfSaidaRouter,
  operacaoProducao: operacaoProducaoRouter,
  ordemProducaoOperacao: ordemProducaoOperacaoRouter,
  ordemProducao: ordemProducaoRouter,
  pagar: pagarRouter,
  pedidoItem: pedidoItemRouter,
  pedido: pedidoRouter,
  produtoCategoria: produtoCategoriaRouter,
  produtoControle: produtoControleRouter,
  produtoEstatistica: produtoEstatisticaRouter,
  produtoItem: produtoItemRouter,
  produtoPlano: produtoPlanoRouter,
  produto: produtoRouter,
  receber: receberRouter,
  usuario: usuarioRouter,
  vendedorMeta: vendedorMetaRouter,
  vendedor: vendedorRouter,
  // @endindex
});

export type TRpcs = typeof routers;
