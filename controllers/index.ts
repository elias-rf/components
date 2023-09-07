// @index(['./**/*.controller.ts'], (f, _) => `import { ${_.camelCase(f.name.slice(0,-10))}Controller } from "${f.path}";`)
import { agendaTelefoneController } from './agenda-telefone.controller'
import { cidadeController } from './cidade.controller'
import { clienteController } from './cliente.controller'
import { diamanteController } from './diamante.controller'
import { empregadoController } from './empregado.controller'
import { esterilizacaoExternaController } from './esterilizacao-externa.controller'
import { esterilizacaoInternaController } from './esterilizacao-interna.controller'
import { estoqueController } from './estoque.controller'
import { etiquetaExternaController } from './etiqueta-externa.controller'
import { etiquetaInternaController } from './etiqueta-interna.controller'
import { fornecedorController } from './fornecedor.controller'
import { groupSubjectController } from './group-subject.controller'
import { groupController } from './group.controller'
import { maquinaController } from './maquina.controller'
import { nfCfopController } from './nf-cfop.controller'
import { nfEntradaControleController } from './nf-entrada-controle.controller'
import { nfEntradaItemController } from './nf-entrada-item.controller'
import { nfEntradaLogController } from './nf-entrada-log.controller'
import { nfEntradaController } from './nf-entrada.controller'
import { nfSaidaFvController } from './nf-saida-fv.controller'
import { nfSaidaItemController } from './nf-saida-item.controller'
import { nfSaidaController } from './nf-saida.controller'
import { operacaoProducaoController } from './operacao-producao.controller'
import { ordemProducaoOperacaoController } from './ordem-producao-operacao.controller'
import { ordemProducaoController } from './ordem-producao.controller'
import { pagarController } from './pagar.controller'
import { pedidoItemController } from './pedido-item.controller'
import { pedidoController } from './pedido.controller'
import { produtoCategoriaController } from './produto-categoria.controller'
import { produtoControleController } from './produto-controle.controller'
import { produtoEstatisticaController } from './produto-estatistica.controller'
import { produtoItemController } from './produto-item.controller'
import { produtoPlanoController } from './produto-plano.controller'
import { produtoController } from './produto.controller'
import { receberController } from './receber.controller'
import { sysResourceController } from './sys-resource.controller'
import { usuarioController } from './usuario.controller'
import { vendedorMetaController } from './vendedor-meta.controller'
import { vendedorController } from './vendedor.controller'
// @endindex

export const module = {
  // @index(['./**/*.controller.ts'], (f, _) => `${_.camelCase(f.name.slice(0,-10))}: {...${_.camelCase(f.name.slice(0,-10))}Controller},`)
  agendaTelefone: { ...agendaTelefoneController },
  cidade: { ...cidadeController },
  cliente: {
    list: clienteController.list,
    read: clienteController.read,
    update: clienteController.update,
    del: clienteController.del,
    create: clienteController.create,
    vendaMensalQuantidade: clienteController.vendaMensalQuantidade,
    vendaMensalValorMedio: clienteController.vendaMensalValorMedio,
    vendaMensalValor: clienteController.vendaMensalValor,
  },
  diamante: { ...diamanteController },
  empregado: { ...empregadoController },
  esterilizacaoExterna: { ...esterilizacaoExternaController },
  esterilizacaoInterna: { ...esterilizacaoInternaController },
  estoque: { ...estoqueController },
  etiquetaExterna: { ...etiquetaExternaController },
  etiquetaInterna: { ...etiquetaInternaController },
  fornecedor: { ...fornecedorController },
  groupSubject: { ...groupSubjectController },
  group: { ...groupController },
  maquina: { ...maquinaController },
  nfCfop: { ...nfCfopController },
  nfEntradaControle: { ...nfEntradaControleController },
  nfEntradaItem: { ...nfEntradaItemController },
  nfEntradaLog: { ...nfEntradaLogController },
  nfEntrada: { ...nfEntradaController },
  nfSaidaFv: { ...nfSaidaFvController },
  nfSaidaItem: { ...nfSaidaItemController },
  nfSaida: { ...nfSaidaController },
  operacaoProducao: { ...operacaoProducaoController },
  ordemProducaoOperacao: { ...ordemProducaoOperacaoController },
  ordemProducao: { ...ordemProducaoController },
  pagar: { ...pagarController },
  pedidoItem: { ...pedidoItemController },
  pedido: { ...pedidoController },
  produtoCategoria: { ...produtoCategoriaController },
  produtoControle: { ...produtoControleController },
  produtoEstatistica: { ...produtoEstatisticaController },
  produtoItem: { ...produtoItemController },
  produtoPlano: { ...produtoPlanoController },
  produto: { ...produtoController },
  receber: { ...receberController },
  sysResource: { ...sysResourceController },
  usuario: {
    list: usuarioController.list,
    read: usuarioController.read,
    update: usuarioController.update,
    del: usuarioController.del,
    create: usuarioController.create,
    login: usuarioController.login,
    logout: usuarioController.logout,
    me: usuarioController.me,
  },
  vendedorMeta: { ...vendedorMetaController },
  vendedor: { ...vendedorController },
  // @endindex
}

export type TModule = typeof module
