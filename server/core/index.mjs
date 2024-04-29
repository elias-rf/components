import { JSONRPCServer } from 'json-rpc-2.0'

import { agendaTelefoneController } from './agenda-telefone/agenda-telefone.controller.mjs'
import { cidadeController } from './cidade_controller.mjs'
import { clienteController } from './cliente/cliente.controller.mjs'
import { diamanteController } from './diamante_controller.mjs'
import { empregadoController } from './empregado_controller.mjs'
import { esterilizacaoExternaController } from './esterilizacao-externa/esterilizacao-externa.controller.mjs'
import { esterilizacaoInternaController } from './esterilizacao-interna/esterilizacao-interna.controller.mjs'
import { estoqueController } from './estoque/estoque_controller.mjs'
import { etiquetaExternaController } from './etiqueta-externa/etiqueta-externa_controller.mjs'
import { etiquetaInternaController } from './etiqueta-interna/etiqueta-interna_controller.mjs'
import { fileManagerController } from './file-manager/file-manager_controller.mjs'
import { fornecedorController } from './fornecedor/fornecedor_controller.mjs'
import { grupoSujeitoController } from './grupo-sujeito/grupo-sujeito_controller.mjs'
import { grupoController } from './grupo/grupo_controller.mjs'
import { logController } from './log/log_controller.mjs'
import { maquinaController } from './maquina_controller.mjs'
import { nfCfopController } from './nf-cfop/nf-cfop_controller.mjs'
import { nfEntradaControleController } from './nf-entrada-controle/nf-entrada-controle_controller.mjs'
import { nfEntradaItemController } from './nf-entrada-item/nf-entrada-item_controller.mjs'
import { nfEntradaLogController } from './nf-entrada-log/nf-entrada-log_controller.mjs'
import { nfEntradaController } from './nf-entrada/nf-entrada_controller.mjs'
import { nfSaidaItemController } from './nf-saida-item/nf-saida-item_controller.mjs'
import { nfSaidaLoteController } from './nf-saida-lote/nf-saida-lote.controller.mjs'
import { nfSaidaController } from './nf-saida/nf-saida.controller.mjs'
import { operacaoProducaoController } from './operacao-producao/operacao-producao_controller.mjs'
import { ordemProducaoOperacaoController } from './ordem-producao-operacao/ordem-producao-operacao_controller.mjs'
import { ordemProducaoController } from './ordem-producao/ordem-producao_controller.mjs'
import { pagarController } from './pagar/pagar_controller.mjs'
import { pedidoItemController } from './pedido/pedido-item_controller.mjs'
import { pedidoController } from './pedido/pedido_controller.mjs'
import { vendedorController } from './pedido/vendedor_controller.mjs'
import { produtoItemController } from './produto-item/produto-item_controller.mjs'
import { produtoCategoriaController } from './produto-plano-categoria/produto-categoria_controller.mjs'
import { produtoPlanoControleController } from './produto-plano-controle/produto-plano-controle_controller.mjs'
import { produtoEstatisticaController } from './produto-plano-estatistica/produto-estatistica_controller.mjs'
import { produtoPlanoController } from './produto-plano/produto-plano_controller.mjs'
import { produtoController } from './produto/produto_controller.mjs'
import { receberController } from './receber/receber_controller.mjs'
import { sysResourceController } from './seguranca/sys-resource_controller.mjs'
import { usuarioController } from './usuario/usuario_controller.mjs'
import { vendedorMetaController } from './vendedor-meta_controller.mjs'

export const modules = {
  // UTILIDADE
  sys_list: list,
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
  ...grupoController,
  ...grupoSujeitoController,
  ...logController,
  ...maquinaController,
  ...nfCfopController,
  ...nfEntradaController,
  ...nfEntradaControleController,
  ...nfEntradaItemController,
  ...nfEntradaLogController,
  ...nfSaidaController,
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
  ...produtoPlanoControleController,
  ...produtoEstatisticaController,
  ...produtoItemController,
  ...produtoPlanoController,
  ...receberController,
  ...sysResourceController,
  ...usuarioController,
  ...vendedorController,
  ...vendedorMetaController,
}

function list() {
  return Object.keys(modules)
}

function registerController(server) {
  for (const [moduleKey, module] of Object.entries(modules)) {
    server.addMethod(moduleKey, module)
  }
}

export const rpcServer = new JSONRPCServer()

registerController(rpcServer)
