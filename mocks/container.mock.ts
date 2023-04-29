import { asFunction, asValue, createContainer, InjectionMode } from "awilix";
import { connectionsMock } from "./connections.mock";
// ---

// @index(['./**/*.model.ts'], (f, _) => `import { ${_.camelCase(f.name.slice(0,-6))}ModelFactory } from "${f.path}";`)
import { agendaTelefoneModelFactory } from "@mono/models/agenda-telefone/agenda-telefone.model";
import { cidadeModelFactory } from "@mono/models/cidade/cidade.model";
import { clienteModelFactory } from "@mono/models/cliente/cliente.model";
import { diamanteModelFactory } from "@mono/models/diamante/diamante.model";
import { empregadoModelFactory } from "@mono/models/empregado/empregado.model";
import { esterilizacaoExternaModelFactory } from "@mono/models/esterilizacao-externa/esterilizacao-externa.model";
import { esterilizacaoInternaModelFactory } from "@mono/models/esterilizacao-interna/esterilizacao-interna.model";
import { estoqueModelFactory } from "@mono/models/estoque/estoque.model";
import { etiquetaExternaModelFactory } from "@mono/models/etiqueta-externa/etiqueta-externa.model";
import { etiquetaInternaModelFactory } from "@mono/models/etiqueta-interna/etiqueta-interna.model";
import { fornecedorModelFactory } from "@mono/models/fornecedor/fornecedor.model";
import { groupSubjectModelFactory } from "@mono/models/group-subject/group-subject.model";
import { maquinaModelFactory } from "@mono/models/maquina/maquina.model";
import { nfCfopModelFactory } from "@mono/models/nf-cfop/nf-cfop.model";
import { nfEntradaControleModelFactory } from "@mono/models/nf-entrada-controle/nf-entrada-controle.model";
import { nfEntradaItemModelFactory } from "@mono/models/nf-entrada-item/nf-entrada-item.model";
import { nfEntradaLogModelFactory } from "@mono/models/nf-entrada-log/nf-entrada-log.model";
import { nfEntradaModelFactory } from "@mono/models/nf-entrada/nf-entrada.model";
import { nfSaidaFvModelFactory } from "@mono/models/nf-saida-fv/nf-saida-fv.model";
import { nfSaidaItemModelFactory } from "@mono/models/nf-saida-item/nf-saida-item.model";
import { nfSaidaModelFactory } from "@mono/models/nf-saida/nf-saida.model";
import { operacaoProducaoModelFactory } from "@mono/models/operacao-producao/operacao-producao.model";
import { ordemProducaoOperacaoModelFactory } from "@mono/models/ordem-producao-operacao/ordem-producao-operacao.model";
import { ordemProducaoModelFactory } from "@mono/models/ordem-producao/ordem-producao.model";
import { pagarModelFactory } from "@mono/models/pagar/pagar.model";
import { pedidoItemModelFactory } from "@mono/models/pedido-item/pedido-item.model";
import { pedidoModelFactory } from "@mono/models/pedido/pedido.model";
import { produtoCategoriaModelFactory } from "@mono/models/produto-categoria/produto-categoria.model";
import { produtoControleModelFactory } from "@mono/models/produto-controle/produto-controle.model";
import { produtoEstatisticaModelFactory } from "@mono/models/produto-estatistica/produto-estatistica.model";
import { produtoItemModelFactory } from "@mono/models/produto-item/produto-item.model";
import { produtoPlanoModelFactory } from "@mono/models/produto-plano/produto-plano.model";
import { produtoModelFactory } from "@mono/models/produto/produto.model";
import { receberModelFactory } from "@mono/models/receber/receber.model";
import { usuarioModelFactory } from "@mono/models/usuario/usuario.model";
import { vendedorMetaModelFactory } from "@mono/models/vendedor-meta/vendedor-meta.model";
import { vendedorModelFactory } from "@mono/models/vendedor/vendedor.model";
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
});
