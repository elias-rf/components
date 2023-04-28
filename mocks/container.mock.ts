import { asFunction, asValue, createContainer, InjectionMode } from "awilix";
import { connectionsMock } from "./connections.mock";
// ---

// @index(['./**/*.model.ts'], (f, _) => `import { ${_.camelCase(f.name.slice(0,-6))}ModelFactory } from "${f.path}";`)
import { agendaTelefoneModelFactory } from "../models/agenda-telefone/agenda-telefone.model";
import { cidadeModelFactory } from "../models/cidade/cidade.model";
import { clienteModelFactory } from "../models/cliente/cliente.model";
import { diamanteModelFactory } from "../models/diamante/diamante.model";
import { empregadoModelFactory } from "../models/empregado/empregado.model";
import { esterilizacaoExternaModelFactory } from "../models/esterilizacao-externa/esterilizacao-externa.model";
import { esterilizacaoInternaModelFactory } from "../models/esterilizacao-interna/esterilizacao-interna.model";
import { estoqueModelFactory } from "../models/estoque/estoque.model";
import { etiquetaExternaModelFactory } from "../models/etiqueta-externa/etiqueta-externa.model";
import { etiquetaInternaModelFactory } from "../models/etiqueta-interna/etiqueta-interna.model";
import { fornecedorModelFactory } from "../models/fornecedor/fornecedor.model";
import { groupSubjectModelFactory } from "../models/group-subject/group-subject.model";
import { maquinaModelFactory } from "../models/maquina/maquina.model";
import { nfCfopModelFactory } from "../models/nf-cfop/nf-cfop.model";
import { nfEntradaControleModelFactory } from "../models/nf-entrada-controle/nf-entrada-controle.model";
import { nfEntradaItemModelFactory } from "../models/nf-entrada-item/nf-entrada-item.model";
import { nfEntradaLogModelFactory } from "../models/nf-entrada-log/nf-entrada-log.model";
import { nfEntradaModelFactory } from "../models/nf-entrada/nf-entrada.model";
import { nfSaidaFvModelFactory } from "../models/nf-saida-fv/nf-saida-fv.model";
import { nfSaidaItemModelFactory } from "../models/nf-saida-item/nf-saida-item.model";
import { nfSaidaModelFactory } from "../models/nf-saida/nf-saida.model";
import { operacaoProducaoModelFactory } from "../models/operacao-producao/operacao-producao.model";
import { ordemProducaoOperacaoModelFactory } from "../models/ordem-producao-operacao/ordem-producao-operacao.model";
import { ordemProducaoModelFactory } from "../models/ordem-producao/ordem-producao.model";
import { pagarModelFactory } from "../models/pagar/pagar.model";
import { pedidoItemModelFactory } from "../models/pedido-item/pedido-item.model";
import { pedidoModelFactory } from "../models/pedido/pedido.model";
import { produtoCategoriaModelFactory } from "../models/produto-categoria/produto-categoria.model";
import { produtoControleModelFactory } from "../models/produto-controle/produto-controle.model";
import { produtoEstatisticaModelFactory } from "../models/produto-estatistica/produto-estatistica.model";
import { produtoItemModelFactory } from "../models/produto-item/produto-item.model";
import { produtoPlanoModelFactory } from "../models/produto-plano/produto-plano.model";
import { produtoModelFactory } from "../models/produto/produto.model";
import { receberModelFactory } from "../models/receber/receber.model";
import { usuarioModelFactory } from "../models/usuario/usuario.model";
import { vendedorMetaModelFactory } from "../models/vendedor-meta/vendedor-meta.model";
import { vendedorModelFactory } from "../models/vendedor/vendedor.model";
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
