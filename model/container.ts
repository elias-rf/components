import { InjectionMode, asFunction, asValue, createContainer } from "awilix";
import { connections } from "../server/dal/connections";
// ---

// @index(['./**/*.model.ts'], (f, _) => `import { ${_.camelCase(f.name.slice(0,-6))}ModelFactory } from "${f.path}";`)
import { agendaTelefoneModelFactory } from "./agenda-telefone/agenda-telefone.model";
import { cidadeModelFactory } from "./cidade/cidade.model";
import { clienteModelFactory } from "./cliente/cliente.model";
import { diamanteModelFactory } from "./diamante/diamante.model";
import { empregadoModelFactory } from "./empregado/empregado.model";
import { esterilizacaoExternaModelFactory } from "./esterilizacao-externa/esterilizacao-externa.model";
import { esterilizacaoInternaModelFactory } from "./esterilizacao-interna/esterilizacao-interna.model";
import { estoqueModelFactory } from "./estoque/estoque.model";
import { etiquetaExternaModelFactory } from "./etiqueta-externa/etiqueta-externa.model";
import { etiquetaInternaModelFactory } from "./etiqueta-interna/etiqueta-interna.model";
import { fornecedorModelFactory } from "./fornecedor/fornecedor.model";
import { groupSubjectModelFactory } from "./group-subject/group-subject.model";
import { maquinaModelFactory } from "./maquina/maquina.model";
import { nfCfopModelFactory } from "./nf-cfop/nf-cfop.model";
import { nfEntradaControleModelFactory } from "./nf-entrada-controle/nf-entrada-controle.model";
import { nfEntradaItemModelFactory } from "./nf-entrada-item/nf-entrada-item.model";
import { nfEntradaLogModelFactory } from "./nf-entrada-log/nf-entrada-log.model";
import { nfEntradaModelFactory } from "./nf-entrada/nf-entrada.model";
import { nfSaidaFvModelFactory } from "./nf-saida-fv/nf-saida-fv.model";
import { nfSaidaItemModelFactory } from "./nf-saida-item/nf-saida-item.model";
import { nfSaidaModelFactory } from "./nf-saida/nf-saida.model";
import { operacaoProducaoModelFactory } from "./operacao-producao/operacao-producao.model";
import { ordemProducaoOperacaoModelFactory } from "./ordem-producao-operacao/ordem-producao-operacao.model";
import { ordemProducaoModelFactory } from "./ordem-producao/ordem-producao.model";
import { pagarModelFactory } from "./pagar/pagar.model";
import { pedidoItemModelFactory } from "./pedido-item/pedido-item.model";
import { pedidoModelFactory } from "./pedido/pedido.model";
import { produtoCategoriaModelFactory } from "./produto-categoria/produto-categoria.model";
import { produtoControleModelFactory } from "./produto-controle/produto-controle.model";
import { produtoEstatisticaModelFactory } from "./produto-estatistica/produto-estatistica.model";
import { produtoItemModelFactory } from "./produto-item/produto-item.model";
import { produtoPlanoModelFactory } from "./produto-plano/produto-plano.model";
import { produtoModelFactory } from "./produto/produto.model";
import { receberModelFactory } from "./receber/receber.model";
import { usuarioModelFactory } from "./usuario/usuario.model";
import { vendedorMetaModelFactory } from "./vendedor-meta/vendedor-meta.model";
import { vendedorModelFactory } from "./vendedor/vendedor.model";
// @endindex

// @index(['./**/*.rpc.ts'], (f, _) => `import { ${_.camelCase(f.name.slice(0,-3))}RpcFactory } from "${f.path}";`)
import { agendaTelefoneRpcFactory } from "./agenda-telefone/agenda-telefone.rpc";
import { cidadeRpcFactory } from "./cidade/cidade.rpc";
import { clienteRpcFactory } from "./cliente/cliente.rpc";
import { diamanteRpcFactory } from "./diamante/diamante.rpc";
import { empregadoRpcFactory } from "./empregado/empregado.rpc";
import { esterilizacaoExternaRpcFactory } from "./esterilizacao-externa/esterilizacao-externa.rpc";
import { esterilizacaoInternaRpcFactory } from "./esterilizacao-interna/esterilizacao-interna.rpc";
import { estoqueRpcFactory } from "./estoque/estoque.rpc";
import { etiquetaExternaRpcFactory } from "./etiqueta-externa/etiqueta-externa.rpc";
import { etiquetaInternaRpcFactory } from "./etiqueta-interna/etiqueta-interna.rpc";
import { fornecedorRpcFactory } from "./fornecedor/fornecedor.rpc";
import { groupSubjectRpcFactory } from "./group-subject/group-subject.rpc";
import { maquinaRpcFactory } from "./maquina/maquina.rpc";
import { nfCfopRpcFactory } from "./nf-cfop/nf-cfop.rpc";
import { nfEntradaControleRpcFactory } from "./nf-entrada-controle/nf-entrada-controle.rpc";
import { nfEntradaItemRpcFactory } from "./nf-entrada-item/nf-entrada-item.rpc";
import { nfEntradaLogRpcFactory } from "./nf-entrada-log/nf-entrada-log.rpc";
import { nfEntradaRpcFactory } from "./nf-entrada/nf-entrada.rpc";
import { nfSaidaFvRpcFactory } from "./nf-saida-fv/nf-saida-fv.rpc";
import { nfSaidaItemRpcFactory } from "./nf-saida-item/nf-saida-item.rpc";
import { nfSaidaRpcFactory } from "./nf-saida/nf-saida.rpc";
import { operacaoProducaoRpcFactory } from "./operacao-producao/operacao-producao.rpc";
import { ordemProducaoOperacaoRpcFactory } from "./ordem-producao-operacao/ordem-producao-operacao.rpc";
import { ordemProducaoRpcFactory } from "./ordem-producao/ordem-producao.rpc";
import { pagarRpcFactory } from "./pagar/pagar.rpc";
import { pedidoItemRpcFactory } from "./pedido-item/pedido-item.rpc";
import { pedidoRpcFactory } from "./pedido/pedido.rpc";
import { produtoCategoriaRpcFactory } from "./produto-categoria/produto-categoria.rpc";
import { produtoControleRpcFactory } from "./produto-controle/produto-controle.rpc";
import { produtoEstatisticaRpcFactory } from "./produto-estatistica/produto-estatistica.rpc";
import { produtoItemRpcFactory } from "./produto-item/produto-item.rpc";
import { produtoPlanoRpcFactory } from "./produto-plano/produto-plano.rpc";
import { produtoRpcFactory } from "./produto/produto.rpc";
import { receberRpcFactory } from "./receber/receber.rpc";
import { usuarioRpcFactory } from "./usuario/usuario.rpc";
import { vendedorMetaRpcFactory } from "./vendedor-meta/vendedor-meta.rpc";
import { vendedorRpcFactory } from "./vendedor/vendedor.rpc";
// @endindex

export const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container.register({
  connections: asValue(connections),
  // @index(['./**/*.model.ts'], (f, _) => `${_.camelCase(f.name.slice(0,-6))}Model : asFunction(${_.camelCase(f.name.slice(0,-6))}ModelFactory),`)
  agendaTelefoneModel: asFunction(agendaTelefoneModelFactory),
  cidadeModel: asFunction(cidadeModelFactory),
  clienteModel: asFunction(clienteModelFactory),
  diamanteModel: asFunction(diamanteModelFactory),
  empregadoModel: asFunction(empregadoModelFactory),
  esterilizacaoExternaModel: asFunction(esterilizacaoExternaModelFactory),
  esterilizacaoInternaModel: asFunction(esterilizacaoInternaModelFactory),
  estoqueModel: asFunction(estoqueModelFactory),
  etiquetaExternaModel: asFunction(etiquetaExternaModelFactory),
  etiquetaInternaModel: asFunction(etiquetaInternaModelFactory),
  fornecedorModel: asFunction(fornecedorModelFactory),
  groupSubjectModel: asFunction(groupSubjectModelFactory),
  maquinaModel: asFunction(maquinaModelFactory),
  nfCfopModel: asFunction(nfCfopModelFactory),
  nfEntradaControleModel: asFunction(nfEntradaControleModelFactory),
  nfEntradaItemModel: asFunction(nfEntradaItemModelFactory),
  nfEntradaLogModel: asFunction(nfEntradaLogModelFactory),
  nfEntradaModel: asFunction(nfEntradaModelFactory),
  nfSaidaFvModel: asFunction(nfSaidaFvModelFactory),
  nfSaidaItemModel: asFunction(nfSaidaItemModelFactory),
  nfSaidaModel: asFunction(nfSaidaModelFactory),
  operacaoProducaoModel: asFunction(operacaoProducaoModelFactory),
  ordemProducaoOperacaoModel: asFunction(ordemProducaoOperacaoModelFactory),
  ordemProducaoModel: asFunction(ordemProducaoModelFactory),
  pagarModel: asFunction(pagarModelFactory),
  pedidoItemModel: asFunction(pedidoItemModelFactory),
  pedidoModel: asFunction(pedidoModelFactory),
  produtoCategoriaModel: asFunction(produtoCategoriaModelFactory),
  produtoControleModel: asFunction(produtoControleModelFactory),
  produtoEstatisticaModel: asFunction(produtoEstatisticaModelFactory),
  produtoItemModel: asFunction(produtoItemModelFactory),
  produtoPlanoModel: asFunction(produtoPlanoModelFactory),
  produtoModel: asFunction(produtoModelFactory),
  receberModel: asFunction(receberModelFactory),
  usuarioModel: asFunction(usuarioModelFactory),
  vendedorMetaModel: asFunction(vendedorMetaModelFactory),
  vendedorModel: asFunction(vendedorModelFactory),
  // @endindex

  // @index(['./**/*.rpc.ts'], (f, _) => `${_.camelCase(f.name.slice(0,-3))}Rpc: asFunction(${_.camelCase(f.name.slice(0,-3))}RpcFactory),`)
  agendaTelefoneRpc: asFunction(agendaTelefoneRpcFactory),
  cidadeRpc: asFunction(cidadeRpcFactory),
  clienteRpc: asFunction(clienteRpcFactory),
  diamanteRpc: asFunction(diamanteRpcFactory),
  empregadoRpc: asFunction(empregadoRpcFactory),
  esterilizacaoExternaRpc: asFunction(esterilizacaoExternaRpcFactory),
  esterilizacaoInternaRpc: asFunction(esterilizacaoInternaRpcFactory),
  estoqueRpc: asFunction(estoqueRpcFactory),
  etiquetaExternaRpc: asFunction(etiquetaExternaRpcFactory),
  etiquetaInternaRpc: asFunction(etiquetaInternaRpcFactory),
  fornecedorRpc: asFunction(fornecedorRpcFactory),
  groupSubjectRpc: asFunction(groupSubjectRpcFactory),
  maquinaRpc: asFunction(maquinaRpcFactory),
  nfCfopRpc: asFunction(nfCfopRpcFactory),
  nfEntradaControleRpc: asFunction(nfEntradaControleRpcFactory),
  nfEntradaItemRpc: asFunction(nfEntradaItemRpcFactory),
  nfEntradaLogRpc: asFunction(nfEntradaLogRpcFactory),
  nfEntradaRpc: asFunction(nfEntradaRpcFactory),
  nfSaidaFvRpc: asFunction(nfSaidaFvRpcFactory),
  nfSaidaItemRpc: asFunction(nfSaidaItemRpcFactory),
  nfSaidaRpc: asFunction(nfSaidaRpcFactory),
  operacaoProducaoRpc: asFunction(operacaoProducaoRpcFactory),
  ordemProducaoOperacaoRpc: asFunction(ordemProducaoOperacaoRpcFactory),
  ordemProducaoRpc: asFunction(ordemProducaoRpcFactory),
  pagarRpc: asFunction(pagarRpcFactory),
  pedidoItemRpc: asFunction(pedidoItemRpcFactory),
  pedidoRpc: asFunction(pedidoRpcFactory),
  produtoCategoriaRpc: asFunction(produtoCategoriaRpcFactory),
  produtoControleRpc: asFunction(produtoControleRpcFactory),
  produtoEstatisticaRpc: asFunction(produtoEstatisticaRpcFactory),
  produtoItemRpc: asFunction(produtoItemRpcFactory),
  produtoPlanoRpc: asFunction(produtoPlanoRpcFactory),
  produtoRpc: asFunction(produtoRpcFactory),
  receberRpc: asFunction(receberRpcFactory),
  usuarioRpc: asFunction(usuarioRpcFactory),
  vendedorMetaRpc: asFunction(vendedorMetaRpcFactory),
  vendedorRpc: asFunction(vendedorRpcFactory),
  // @endindex
});
