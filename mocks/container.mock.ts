import { InjectionMode, asFunction, asValue, createContainer } from "awilix";
import { connectionsMock } from "./connections.mock";
// ---

// @index(['./**/*.model.ts'], (f, _) => `import { ${_.camelCase(f.name.slice(0,-6))}ModelFactory } from "${f.path}";`)
import { agendaTelefoneModelFactory } from "../model/agenda-telefone/agenda-telefone.model";
import { cidadeModelFactory } from "../model/cidade/cidade.model";
import { clienteModelFactory } from "../model/cliente/cliente.model";
import { diamanteModelFactory } from "../model/diamante/diamante.model";
import { empregadoModelFactory } from "../model/empregado/empregado.model";
import { esterilizacaoExternaModelFactory } from "../model/esterilizacao-externa/esterilizacao-externa.model";
import { esterilizacaoInternaModelFactory } from "../model/esterilizacao-interna/esterilizacao-interna.model";
import { estoqueModelFactory } from "../model/estoque/estoque.model";
import { etiquetaExternaModelFactory } from "../model/etiqueta-externa/etiqueta-externa.model";
import { etiquetaInternaModelFactory } from "../model/etiqueta-interna/etiqueta-interna.model";
import { fornecedorModelFactory } from "../model/fornecedor/fornecedor.model";
import { groupSubjectModelFactory } from "../model/group-subject/group-subject.model";
import { maquinaModelFactory } from "../model/maquina/maquina.model";
import { nfCfopModelFactory } from "../model/nf-cfop/nf-cfop.model";
import { nfEntradaControleModelFactory } from "../model/nf-entrada-controle/nf-entrada-controle.model";
import { nfEntradaItemModelFactory } from "../model/nf-entrada-item/nf-entrada-item.model";
import { nfEntradaLogModelFactory } from "../model/nf-entrada-log/nf-entrada-log.model";
import { nfEntradaModelFactory } from "../model/nf-entrada/nf-entrada.model";
import { nfSaidaFvModelFactory } from "../model/nf-saida-fv/nf-saida-fv.model";
import { nfSaidaItemModelFactory } from "../model/nf-saida-item/nf-saida-item.model";
import { nfSaidaModelFactory } from "../model/nf-saida/nf-saida.model";
import { operacaoProducaoModelFactory } from "../model/operacao-producao/operacao-producao.model";
import { ordemProducaoOperacaoModelFactory } from "../model/ordem-producao-operacao/ordem-producao-operacao.model";
import { ordemProducaoModelFactory } from "../model/ordem-producao/ordem-producao.model";
import { pagarModelFactory } from "../model/pagar/pagar.model";
import { pedidoItemModelFactory } from "../model/pedido-item/pedido-item.model";
import { pedidoModelFactory } from "../model/pedido/pedido.model";
import { produtoCategoriaModelFactory } from "../model/produto-categoria/produto-categoria.model";
import { produtoControleModelFactory } from "../model/produto-controle/produto-controle.model";
import { produtoEstatisticaModelFactory } from "../model/produto-estatistica/produto-estatistica.model";
import { produtoItemModelFactory } from "../model/produto-item/produto-item.model";
import { produtoPlanoModelFactory } from "../model/produto-plano/produto-plano.model";
import { produtoModelFactory } from "../model/produto/produto.model";
import { receberModelFactory } from "../model/receber/receber.model";
import { usuarioModelFactory } from "../model/usuario/usuario.model";
import { vendedorMetaModelFactory } from "../model/vendedor-meta/vendedor-meta.model";
import { vendedorModelFactory } from "../model/vendedor/vendedor.model";
// @endindex

// @index(['./**/*.rpc.ts'], (f, _) => `import { ${_.camelCase(f.name.slice(0,-3))}RpcFactory } from "${f.path}";`)
import { agendaTelefoneRpcFactory } from "../model/agenda-telefone/agenda-telefone.rpc";
import { cidadeRpcFactory } from "../model/cidade/cidade.rpc";
import { clienteRpcFactory } from "../model/cliente/cliente.rpc";
import { diamanteRpcFactory } from "../model/diamante/diamante.rpc";
import { empregadoRpcFactory } from "../model/empregado/empregado.rpc";
import { esterilizacaoExternaRpcFactory } from "../model/esterilizacao-externa/esterilizacao-externa.rpc";
import { esterilizacaoInternaRpcFactory } from "../model/esterilizacao-interna/esterilizacao-interna.rpc";
import { estoqueRpcFactory } from "../model/estoque/estoque.rpc";
import { etiquetaExternaRpcFactory } from "../model/etiqueta-externa/etiqueta-externa.rpc";
import { etiquetaInternaRpcFactory } from "../model/etiqueta-interna/etiqueta-interna.rpc";
import { fornecedorRpcFactory } from "../model/fornecedor/fornecedor.rpc";
import { groupSubjectRpcFactory } from "../model/group-subject/group-subject.rpc";
import { maquinaRpcFactory } from "../model/maquina/maquina.rpc";
import { nfCfopRpcFactory } from "../model/nf-cfop/nf-cfop.rpc";
import { nfEntradaControleRpcFactory } from "../model/nf-entrada-controle/nf-entrada-controle.rpc";
import { nfEntradaItemRpcFactory } from "../model/nf-entrada-item/nf-entrada-item.rpc";
import { nfEntradaLogRpcFactory } from "../model/nf-entrada-log/nf-entrada-log.rpc";
import { nfEntradaRpcFactory } from "../model/nf-entrada/nf-entrada.rpc";
import { nfSaidaFvRpcFactory } from "../model/nf-saida-fv/nf-saida-fv.rpc";
import { nfSaidaItemRpcFactory } from "../model/nf-saida-item/nf-saida-item.rpc";
import { nfSaidaRpcFactory } from "../model/nf-saida/nf-saida.rpc";
import { operacaoProducaoRpcFactory } from "../model/operacao-producao/operacao-producao.rpc";
import { ordemProducaoOperacaoRpcFactory } from "../model/ordem-producao-operacao/ordem-producao-operacao.rpc";
import { ordemProducaoRpcFactory } from "../model/ordem-producao/ordem-producao.rpc";
import { pagarRpcFactory } from "../model/pagar/pagar.rpc";
import { pedidoItemRpcFactory } from "../model/pedido-item/pedido-item.rpc";
import { pedidoRpcFactory } from "../model/pedido/pedido.rpc";
import { produtoCategoriaRpcFactory } from "../model/produto-categoria/produto-categoria.rpc";
import { produtoControleRpcFactory } from "../model/produto-controle/produto-controle.rpc";
import { produtoEstatisticaRpcFactory } from "../model/produto-estatistica/produto-estatistica.rpc";
import { produtoItemRpcFactory } from "../model/produto-item/produto-item.rpc";
import { produtoPlanoRpcFactory } from "../model/produto-plano/produto-plano.rpc";
import { produtoRpcFactory } from "../model/produto/produto.rpc";
import { receberRpcFactory } from "../model/receber/receber.rpc";
import { usuarioRpcFactory } from "../model/usuario/usuario.rpc";
import { vendedorMetaRpcFactory } from "../model/vendedor-meta/vendedor-meta.rpc";
import { vendedorRpcFactory } from "../model/vendedor/vendedor.rpc";
// @endindex

export const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container.register({
  connections: asValue(connectionsMock),
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
