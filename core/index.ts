import { dataSource } from '@/data/index.js'
import { JSONRPCServer, TypedJSONRPCServer } from 'json-rpc-2.0'

import { agendaTelefoneController } from './agenda-telefone/agenda-telefone.controller.js'
import { cidadeController } from './cidade_controller.js'
import { clienteController } from './cliente/cliente_controller.js'
import { diamanteController } from './diamante_controller.js'
import { empregadoController } from './empregado_controller.js'
import { esterilizacaoExternaController } from './esterilizacao-externa/esterilizacao-externa_controller.js'
import { esterilizacaoInternaController } from './esterilizacao-interna/esterilizacao-interna_controller.js'
import { estoqueController } from './estoque/estoque_controller.js'
import { etiquetaExternaController } from './etiqueta-externa/etiqueta-externa_controller.js'
import { etiquetaInternaController } from './etiqueta-interna/etiqueta-interna_controller.js'
import { fileManagerController } from './file-manager/file-manager_controller.js'
import { fornecedorController } from './fornecedor/fornecedor_controller.js'
import { groupSubjectController } from './group-subject/group-subject_controller.js'
import { groupController } from './group/group_controller.js'
import { logController } from './log/log_controller.js'
import { maquinaController } from './maquina_controller.js'
import { nfCfopController } from './nf-cfop/nf-cfop_controller.js'
import { nfEntradaControleController } from './nf-entrada-controle/nf-entrada-controle_controller.js'
import { nfEntradaItemController } from './nf-entrada-item/nf-entrada-item_controller.js'
import { nfEntradaLogController } from './nf-entrada-log/nf-entrada-log_controller.js'
import { nfEntradaController } from './nf-entrada/nf-entrada_controller.js'
import { nfSaidaItemController } from './nf-saida-item/nf-saida-item_controller.js'
import { nfSaidaLoteController } from './nf-saida-lote/nf-saida-lote_controller.js'
import { nfSaidaController } from './nf-saida/nf-saida_controller.js'
import { operacaoProducaoController } from './operacao-producao/operacao-producao_controller.js'
import { ordemProducaoOperacaoController } from './ordem-producao-operacao/ordem-producao-operacao_controller.js'
import { ordemProducaoController } from './ordem-producao/ordem-producao_controller.js'
import { pagarController } from './pagar/pagar_controller.js'
import { pedidoItemController } from './pedido/pedido-item_controller.js'
import { pedidoController } from './pedido/pedido_controller.js'
import { vendedorMetaController } from './pedido/vendedor-meta_controller.js'
import { vendedorController } from './pedido/vendedor_controller.js'
import { produtoItemController } from './produto-item/produto-item_controller.js'
import { produtoCategoriaController } from './produto-plano-categoria/produto-categoria_controller.js'
import { produtoPlanoControleController } from './produto-plano-controle/produto-plano-controle_controller.js'
import { produtoEstatisticaController } from './produto-plano-estatistica/produto-estatistica_controller.js'
import { produtoPlanoController } from './produto-plano/produto-plano_controller.js'
import { produtoController } from './produto/produto_controller.js'
import { receberController } from './receber/receber_controller.js'
import { sysResourceController } from './security/sys-resource_controller.js'
import { usuarioController } from './usuario/usuario_controller.js'

export const modules = {
  // UTILIDADE
  sys_list: list,
  ...agendaTelefoneController,
  // ...cidadeController,
  // ...clienteController,
  // ...diamanteController,
  // ...empregadoController,
  ...esterilizacaoExternaController,
  ...esterilizacaoInternaController,
  // ...estoqueController,
  // ...etiquetaExternaController,
  // ...etiquetaInternaController,
  // ...fileManagerController,
  // ...fornecedorController,
  // ...groupController,
  // ...groupSubjectController,
  // ...logController,
  // ...maquinaController,
  // ...nfCfopController,
  // ...nfEntradaController,
  // ...nfEntradaControleController,
  // ...nfEntradaItemController,
  // ...nfEntradaLogController,
  ...nfSaidaController,
  // ...nfSaidaFvController,
  // ...nfSaidaItemController,
  // ...nfSaidaLoteController,
  // ...operacaoProducaoController,
  ...ordemProducaoController,
  ...ordemProducaoOperacaoController,
  // ...pagarController,
  // ...pedidoController,
  // ...pedidoItemController,
  // ...produtoController,
  // ...produtoCategoriaController,
  ...produtoPlanoControleController,
  // ...produtoEstatisticaController,
  // ...produtoItemController,
  ...produtoPlanoController,
  // ...receberController,
  // ...sysResourceController,
  // ...usuarioController,
  // ...vendedorController,
  // ...vendedorMetaController,
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
