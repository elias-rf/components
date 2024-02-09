// @index(['./**/*_controller.ts'], (f, _) => `import { ${_.camelCase(f.name.slice(0,-10))}Controller } from "${f.path}.js";`)
import { JSONRPCServer, TypedJSONRPCServer } from 'json-rpc-2.0'
import { agendaTelefoneController } from './agenda-telefone_controller.js'
import { cidadeController } from './cidade_controller.js'
import { clienteController } from './cliente_controller.js'
import { diamanteController } from './diamante_controller.js'
import { empregadoController } from './empregado_controller.js'
import { esterilizacaoExternaController } from './esterilizacao-externa_controller.js'
import { esterilizacaoInternaController } from './esterilizacao-interna_controller.js'
import { estoqueController } from './estoque_controller.js'
import { etiquetaExternaController } from './etiqueta-externa_controller.js'
import { etiquetaInternaController } from './etiqueta-interna_controller.js'
import { fileManagerController } from './file-manager_controller.js'
import { fornecedorController } from './fornecedor_controller.js'
import { groupSubjectController } from './group-subject_controller.js'
import { groupController } from './group_controller.js'
import { logController } from './log_controller.js'
import { maquinaController } from './maquina_controller.js'
import { nfCfopController } from './nf-cfop_controller.js'
import { nfEntradaControleController } from './nf-entrada-controle_controller.js'
import { nfEntradaItemController } from './nf-entrada-item_controller.js'
import { nfEntradaLogController } from './nf-entrada-log_controller.js'
import { nfEntradaController } from './nf-entrada_controller.js'
import { nfSaidaFvController } from './nf-saida-fv_controller.js'
import { nfSaidaItemController } from './nf-saida-item_controller.js'
import { nfSaidaLoteController } from './nf-saida-lote_controller.js'
import { nfSaidaController } from './nf-saida/nf-saida_controller.js'
import { operacaoProducaoController } from './operacao-producao_controller.js'
import { ordemProducaoOperacaoController } from './ordem-producao-operacao_controller.js'
import { ordemProducaoController } from './ordem-producao_controller.js'
import { pagarController } from './pagar_controller.js'
import { pedidoItemController } from './pedido-item_controller.js'
import { pedidoController } from './pedido_controller.js'
import { produtoCategoriaController } from './produto-categoria_controller.js'
import { produtoControleController } from './produto-controle_controller.js'
import { produtoEstatisticaController } from './produto-estatistica_controller.js'
import { produtoItemController } from './produto-item_controller.js'
import { produtoPlanoController } from './produto-plano_controller.js'
import { produtoController } from './produto_controller.js'
import { receberController } from './receber_controller.js'
import { sysResourceController } from './sys-resource_controller.js'
import { usuarioController } from './usuario_controller.js'
import { vendedorMetaController } from './vendedor-meta_controller.js'
import { vendedorController } from './vendedor_controller.js'
// @endindex

export const modules = {
  // UTILIDADE
  sys_list: list,

  // @index(['./**/*_controller.ts'], (f, _) => `...${_.camelCase(f.name.slice(0,-10))}Controller,`)
  ...agendaTelefoneController,
  ...cidadeController,
  ...clienteController,
  ...diamanteController,
  ...empregadoController,
  ...esterilizacaoExternaController,
  ...esterilizacaoInternaController,
  ...estoqueController,
  ...etiquetaExternaController,
  ...etiquetaInternaController,
  ...fileManagerController,
  ...fornecedorController,
  ...groupController,
  ...groupSubjectController,
  ...logController,
  ...maquinaController,
  ...nfCfopController,
  ...nfEntradaController,
  ...nfEntradaControleController,
  ...nfEntradaItemController,
  ...nfEntradaLogController,
  ...nfSaidaController,
  ...nfSaidaFvController,
  ...nfSaidaItemController,
  ...nfSaidaLoteController,
  ...operacaoProducaoController,
  ...ordemProducaoController,
  ...ordemProducaoOperacaoController,
  ...pagarController,
  ...pedidoController,
  ...pedidoItemController,
  ...produtoController,
  ...produtoCategoriaController,
  ...produtoControleController,
  ...produtoEstatisticaController,
  ...produtoItemController,
  ...produtoPlanoController,
  ...receberController,
  ...sysResourceController,
  ...usuarioController,
  ...vendedorController,
  ...vendedorMetaController,
  // @endindex
}

function list() {
  return Object.keys(modules)
}

export type TModules = typeof modules

function registerController(server: TypedJSONRPCServer<TModules>) {
  for (const [moduleKey, module] of Object.entries(modules)) {
    server.addMethod(moduleKey as keyof TModules, module as any)
  }
}

export const rpcServer: TypedJSONRPCServer<TModules> = new JSONRPCServer()

registerController(rpcServer)
