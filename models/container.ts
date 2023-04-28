import { asFunction, asValue, createContainer, InjectionMode } from "awilix";
import { connections } from "./connections";
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
});
