import { TDataSource } from '@/data/index.js'
import { TNfEntradaLogDtoFields } from '@/data/plano/nf-entrada-log/nf-entrada-log.type.js'
import { TCount } from '@/types/index.js'

export const count =
  (dataSource: TDataSource): TCount<TNfEntradaLogDtoFields> =>
  async (args) => {
    return dataSource.plano.nfEntradaLog.count(args)
  }
