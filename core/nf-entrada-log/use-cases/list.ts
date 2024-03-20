import { TDataSource } from '@/data/index.js'
import { TNfEntradaLogDtoFields } from '@/data/plano/nf-entrada-log/nf-entrada-log.type.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource): TList<TNfEntradaLogDtoFields> =>
  async (args) => {
    return dataSource.plano.nfEntradaLog.list(args)
  }
