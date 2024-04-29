import { estoqueController } from '../../../core/estoque/estoque_controller.mjs'
import { nfEntradaControleController } from '../../../core/nf-entrada-controle/nf-entrada-controle_controller.mjs'
import { nfEntradaItemController } from '../../../core/nf-entrada-item/nf-entrada-item_controller.mjs'
import { count } from './count.mjs'
import { createTransferencia } from './create-transferencia.mjs'
import { create } from './create.mjs'
import { del } from './del.mjs'
import { list } from './list.mjs'
import { read } from './read.mjs'
import { update } from './update.mjs'

export const nfEntradaUseCases = (dataSource, { ordemProducaoController }) => ({
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
