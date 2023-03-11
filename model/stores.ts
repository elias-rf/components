// @index(['./**/*.store.ts'], (f, _) => `import { ${_.camelCase(f.name.slice(0,-6))}Store } from "${f.path}";`)
import { agendaTelefoneStore } from "./agenda-telefone/agenda-telefone.store";
import { cidadeStore } from "./cidade/cidade.store";
import { clienteStore } from "./cliente/cliente.store";
import { diamanteStore } from "./diamante/diamante.store";
import { empregadoStore } from "./empregado/empregado.store";
import { esterilizacaoExternaStore } from "./esterilizacao-externa/esterilizacao-externa.store";
import { esterilizacaoInternaStore } from "./esterilizacao-interna/esterilizacao-interna.store";
import { estoqueStore } from "./estoque/estoque.store";
import { etiquetaExternaStore } from "./etiqueta-externa/etiqueta-externa.store";
import { etiquetaInternaStore } from "./etiqueta-interna/etiqueta-interna.store";
import { fornecedorStore } from "./fornecedor/fornecedor.store";
import { groupSubjectStore } from "./group-subject/group-subject.store";
import { maquinaStore } from "./maquina/maquina.store";
import { nfCfopStore } from "./nf-cfop/nf-cfop.store";
import { nfEntradaControleStore } from "./nf-entrada-controle/nf-entrada-controle.store";
import { nfEntradaItemStore } from "./nf-entrada-item/nf-entrada-item.store";
import { nfEntradaLogStore } from "./nf-entrada-log/nf-entrada-log.store";
import { nfEntradaStore } from "./nf-entrada/nf-entrada.store";
import { nfSaidaFvStore } from "./nf-saida-fv/nf-saida-fv.store";
import { nfSaidaItemStore } from "./nf-saida-item/nf-saida-item.store";
import { nfSaidaStore } from "./nf-saida/nf-saida.store";
import { operacaoProducaoStore } from "./operacao-producao/operacao-producao.store";
import { ordemProducaoOperacaoStore } from "./ordem-producao-operacao/ordem-producao-operacao.store";
import { ordemProducaoStore } from "./ordem-producao/ordem-producao.store";
import { pagarStore } from "./pagar/pagar.store";
import { pedidoItemStore } from "./pedido-item/pedido-item.store";
import { pedidoStore } from "./pedido/pedido.store";
import { produtoCategoriaStore } from "./produto-categoria/produto-categoria.store";
import { produtoControleStore } from "./produto-controle/produto-controle.store";
import { produtoEstatisticaStore } from "./produto-estatistica/produto-estatistica.store";
import { produtoItemStore } from "./produto-item/produto-item.store";
import { produtoPlanoStore } from "./produto-plano/produto-plano.store";
import { produtoStore } from "./produto/produto.store";
import { receberStore } from "./receber/receber.store";
import { usuarioStore } from "./usuario/usuario.store";
import { vendedorMetaStore } from "./vendedor-meta/vendedor-meta.store";
import { vendedorStore } from "./vendedor/vendedor.store";
// @endindex

export const stores = {
  // @index(['./**/*.store.ts'], (f, _) => `${_.camelCase(f.name.slice(0,-6))}Store: ${_.camelCase(f.name.slice(0,-6))}Store,`)
  agendaTelefoneStore: agendaTelefoneStore,
  cidadeStore: cidadeStore,
  clienteStore: clienteStore,
  diamanteStore: diamanteStore,
  empregadoStore: empregadoStore,
  esterilizacaoExternaStore: esterilizacaoExternaStore,
  esterilizacaoInternaStore: esterilizacaoInternaStore,
  estoqueStore: estoqueStore,
  etiquetaExternaStore: etiquetaExternaStore,
  etiquetaInternaStore: etiquetaInternaStore,
  fornecedorStore: fornecedorStore,
  groupSubjectStore: groupSubjectStore,
  maquinaStore: maquinaStore,
  nfCfopStore: nfCfopStore,
  nfEntradaControleStore: nfEntradaControleStore,
  nfEntradaItemStore: nfEntradaItemStore,
  nfEntradaLogStore: nfEntradaLogStore,
  nfEntradaStore: nfEntradaStore,
  nfSaidaFvStore: nfSaidaFvStore,
  nfSaidaItemStore: nfSaidaItemStore,
  nfSaidaStore: nfSaidaStore,
  operacaoProducaoStore: operacaoProducaoStore,
  ordemProducaoOperacaoStore: ordemProducaoOperacaoStore,
  ordemProducaoStore: ordemProducaoStore,
  pagarStore: pagarStore,
  pedidoItemStore: pedidoItemStore,
  pedidoStore: pedidoStore,
  produtoCategoriaStore: produtoCategoriaStore,
  produtoControleStore: produtoControleStore,
  produtoEstatisticaStore: produtoEstatisticaStore,
  produtoItemStore: produtoItemStore,
  produtoPlanoStore: produtoPlanoStore,
  produtoStore: produtoStore,
  receberStore: receberStore,
  usuarioStore: usuarioStore,
  vendedorMetaStore: vendedorMetaStore,
  vendedorStore: vendedorStore,
  // @endindex
};
