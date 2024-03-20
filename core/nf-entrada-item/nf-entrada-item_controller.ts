import { nfEntradaItemUseCases } from '@/core/nf-entrada-item/use-cases/index.js'
import { dataSource } from '@/data/index.js'

const useCases = nfEntradaItemUseCases(dataSource)

export const nfEntradaItemController = {
  nfEntradaItem_count: useCases.count,
  nfEntradaItem_create: useCases.create,
  nfEntradaItem_del: useCases.del,
  nfEntradaItem_list: useCases.list,
  nfEntradaItem_read: useCases.read,
  nfEntradaItem_update: useCases.update,
}

export type TNfEntradaItemController = typeof nfEntradaItemController
