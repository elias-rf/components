import { router } from "@/rpc/utils/trpc-server";
// @index(['./**/*.trpc.ts'], (f, _) => `import { ${_.camelCase(f.name.slice(0,-4))}Router } from "${f.path}";`)
import { ordemProducaoRouter } from "@/rpc/ordem-producao.trpc";
import { agendaTelefoneRouter } from "./agenda-telefone.trpc";
import { cidadeRouter } from "./cidade.trpc";
import { clienteRouter } from "./cliente.trpc";
import { diamanteRouter } from "./diamante.trpc";
import { empregadoRouter } from "./empregado.trpc";
import { esterilizacaoExternaRouter } from "./esterilizacao-externa.trpc";
import { esterilizacaoInternaRouter } from "./esterilizacao-interna.trpc";
import { estoqueRouter } from "./estoque.trpc";
import { etiquetaExternaRouter } from "./etiqueta-externa.trpc";
import { etiquetaInternaRouter } from "./etiqueta-interna.trpc";
import { fornecedorRouter } from "./fornecedor.trpc";
import { groupSubjectRouter } from "./group-subject.trpc";
import { groupRouter } from "./group.trpc";
import { maquinaRouter } from "./maquina.trpc";
import { nfCfopRouter } from "./nf-cfop.trpc";
import { nfEntradaControleRouter } from "./nf-entrada-controle.trpc";
import { nfEntradaItemRouter } from "./nf-entrada-item.trpc";
import { nfEntradaLogRouter } from "./nf-entrada-log.trpc";
import { nfEntradaRouter } from "./nf-entrada.trpc";
import { nfSaidaFvRouter } from "./nf-saida-fv.trpc";
import { nfSaidaItemRouter } from "./nf-saida-item.trpc";
import { nfSaidaRouter } from "./nf-saida.trpc";
import { operacaoProducaoRouter } from "./operacao-producao.trpc";
import { ordemProducaoOperacaoRouter } from "./ordem-producao-operacao.trpc";
import { pagarRouter } from "./pagar.trpc";
import { pedidoItemRouter } from "./pedido-item.trpc";
import { pedidoRouter } from "./pedido.trpc";
import { produtoCategoriaRouter } from "./produto-categoria.trpc";
import { produtoControleRouter } from "./produto-controle.trpc";
import { produtoEstatisticaRouter } from "./produto-estatistica.trpc";
import { produtoItemRouter } from "./produto-item.trpc";
import { produtoPlanoRouter } from "./produto-plano.trpc";
import { produtoRouter } from "./produto.trpc";
import { receberRouter } from "./receber.trpc";
import { sysResourceRouter } from "./sys-resource.trpc";
import { usuarioRouter } from "./usuario.trpc";
import { vendedorMetaRouter } from "./vendedor-meta.trpc";
import { vendedorRouter } from "./vendedor.trpc";
// @endindex

export const appRouter = router({
  // @index(['./**/*.trpc.ts'], (f, _) => `${_.camelCase(f.name.slice(0,-4))}: ${_.camelCase(f.name.slice(0,-4))}Router,`)
  sysResource: sysResourceRouter,
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
  group: groupRouter,
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

export type TAppRouter = typeof appRouter;
