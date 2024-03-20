import { nfEntradaLogUseCases } from '@/core/nf-entrada-log/use-cases/index.js'
import { dataSource } from '@/data/index.js'

const useCases = nfEntradaLogUseCases(dataSource)

export const nfEntradaLogController = {
  nfEntradaLog_count: useCases.count,
  nfEntradaLog_create: useCases.create,
  nfEntradaLog_del: useCases.del,
  nfEntradaLog_list: useCases.list,
  nfEntradaLog_read: useCases.read,
  nfEntradaLog_update: useCases.update,
}

export type TNfEntradaLogController = typeof nfEntradaLogController
