import { nfEntradaControleUseCases } from '@/core/nf-entrada-controle/use-cases/index.js'
import { dataSource } from '@/data/index.js'

const useCases = nfEntradaControleUseCases(dataSource)

export const nfEntradaControleController = {
  nfEntradaControle_count: useCases.count,
  nfEntradaControle_create: useCases.create,
  nfEntradaControle_del: useCases.del,
  nfEntradaControle_list: useCases.list,
  nfEntradaControle_read: useCases.read,
  nfEntradaControle_update: useCases.update,
}

export type TNfEntradaControleController = typeof nfEntradaControleController
