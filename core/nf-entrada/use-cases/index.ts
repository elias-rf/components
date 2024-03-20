import { estoqueController } from '@/core/estoque/estoque_controller.js'
import { nfEntradaControleController } from '@/core/nf-entrada-controle/nf-entrada-controle_controller.js'
import { nfEntradaItemController } from '@/core/nf-entrada-item/nf-entrada-item_controller.js'
import { TOrdemProducaoController } from '@/core/ordem-producao/ordem-producao_controller.js'
import { TDataSource } from '@/data/index.js'
import { count } from './count.js'
import { createTransferencia } from './create-transferencia.js'
import { create } from './create.js'
import { del } from './del.js'
import { list } from './list.js'
import { read } from './read.js'
import { update } from './update.js'

export const nfEntradaUseCases = (
  dataSource: TDataSource,
  {
    ordemProducaoController,
  }: { ordemProducaoController: TOrdemProducaoController }
) => ({
  list: list(dataSource),
  read: read(dataSource),
  count: count(dataSource),
  update: update(dataSource),
  create: create(dataSource),
  createTransferencia: createTransferencia(dataSource, {
    ordemProducaoController,
    nfEntradaItemController,
    nfEntradaControleController,
    estoqueController,
  }),
  del: del(dataSource),
})
