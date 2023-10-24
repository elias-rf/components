// @index(['./**/*_controller.ts'], (f, _) => `import { ${_.camelCase(f.name.slice(0,-10))}Controller } from "${f.path}";`)
import { agendaTelefoneController } from './agenda-telefone_controller'
import { cidadeController } from './cidade_controller'
import { clienteController } from './cliente_controller'
import { diamanteController } from './diamante_controller'
import { empregadoController } from './empregado_controller'
import { esterilizacaoExternaController } from './esterilizacao-externa_controller'
import { esterilizacaoInternaController } from './esterilizacao-interna_controller'
import { estoqueController } from './estoque_controller'
import { etiquetaExternaController } from './etiqueta-externa_controller'
import { etiquetaInternaController } from './etiqueta-interna_controller'
import { fornecedorController } from './fornecedor_controller'
import { groupSubjectController } from './group-subject_controller'
import { groupController } from './group_controller'
import { maquinaController } from './maquina_controller'
import { nfCfopController } from './nf-cfop_controller'
import { nfEntradaControleController } from './nf-entrada-controle_controller'
import { nfEntradaItemController } from './nf-entrada-item_controller'
import { nfEntradaLogController } from './nf-entrada-log_controller'
import { nfEntradaController } from './nf-entrada_controller'
import { nfSaidaFvController } from './nf-saida-fv_controller'
import { nfSaidaItemController } from './nf-saida-item_controller'
import { nfSaidaLoteController } from './nf-saida-lote_controller'
import { nfSaidaController } from './nf-saida_controller'
import { operacaoProducaoController } from './operacao-producao_controller'
import { ordemProducaoOperacaoController } from './ordem-producao-operacao_controller'
import { ordemProducaoController } from './ordem-producao_controller'
import { pagarController } from './pagar_controller'
import { pedidoItemController } from './pedido-item_controller'
import { pedidoController } from './pedido_controller'
import { produtoCategoriaController } from './produto-categoria_controller'
import { produtoControleController } from './produto-controle_controller'
import { produtoEstatisticaController } from './produto-estatistica_controller'
import { produtoItemController } from './produto-item_controller'
import { produtoPlanoController } from './produto-plano_controller'
import { produtoController } from './produto_controller'
import { receberController } from './receber_controller'
import { sysResourceController } from './sys-resource_controller'
import { usuarioController } from './usuario_controller'
import { vendedorMetaController } from './vendedor-meta_controller'
import { vendedorController } from './vendedor_controller'
// @endindex

export const module = {
  sys: {
    list,
  },
  // @index(['./**/*_controller.ts'], (f, _) => `${_.camelCase(f.name.slice(0,-10))}: {...${_.camelCase(f.name.slice(0,-10))}Controller},`)
  agendaTelefone: { ...agendaTelefoneController },
  cidade: { ...cidadeController },
  cliente: { ...clienteController },
  diamante: { ...diamanteController },
  empregado: { ...empregadoController },
  esterilizacaoExterna: { ...esterilizacaoExternaController },
  esterilizacaoInterna: { ...esterilizacaoInternaController },
  estoque: { ...estoqueController },
  etiquetaExterna: { ...etiquetaExternaController },
  etiquetaInterna: { ...etiquetaInternaController },
  fornecedor: { ...fornecedorController },
  group: { ...groupController },
  groupSubject: { ...groupSubjectController },
  maquina: { ...maquinaController },
  nfCfop: { ...nfCfopController },
  nfEntrada: { ...nfEntradaController },
  nfEntradaControle: { ...nfEntradaControleController },
  nfEntradaItem: { ...nfEntradaItemController },
  nfEntradaLog: { ...nfEntradaLogController },
  nfSaida: { ...nfSaidaController },
  nfSaidaFv: { ...nfSaidaFvController },
  nfSaidaItem: { ...nfSaidaItemController },
  nfSaidaLote: { ...nfSaidaLoteController },
  operacaoProducao: { ...operacaoProducaoController },
  ordemProducao: { ...ordemProducaoController },
  ordemProducaoOperacao: { ...ordemProducaoOperacaoController },
  pagar: { ...pagarController },
  pedido: { ...pedidoController },
  pedidoItem: { ...pedidoItemController },
  produto: { ...produtoController },
  produtoCategoria: { ...produtoCategoriaController },
  produtoControle: { ...produtoControleController },
  produtoEstatistica: { ...produtoEstatisticaController },
  produtoItem: { ...produtoItemController },
  produtoPlano: { ...produtoPlanoController },
  receber: { ...receberController },
  sysResource: { ...sysResourceController },
  usuario: { ...usuarioController },
  vendedor: { ...vendedorController },
  vendedorMeta: { ...vendedorMetaController },
  // @endindex
}

type TProcedure<T> = { [K in keyof T]: TProcedure<T[K]> }

function list() {
  const moduleKeys = Object.keys(module) as unknown as Array<KModule>
  const response = moduleKeys.reduce<{
    [mdl: string]: string[]
  }>((resp, moduleKey) => {
    const methodKeys = Object.keys(module[moduleKey]) as unknown as Array<
      keyof TProcedure<TModule[typeof moduleKey]>
    >
    const rpcMethods = methodKeys.filter((fnc) => module[moduleKey][fnc].rpc)
    resp[moduleKey] = rpcMethods.map((rpcMethod) => {
      return rpcMethod
    })
    return resp
  }, {})
  return response
}

list.rpc = true

export type TModule = typeof module
type KModule = keyof TModule
