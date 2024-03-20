import { TDataSource } from '@/data/index.js'
import { TNfEntradaLogDtoFields } from '@/data/plano/nf-entrada-log/nf-entrada-log.type.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (dataSource: TDataSource): TUpdate<TNfEntradaLogDtoFields> =>
  async (args) => {
    return dataSource.plano.nfEntradaLog.update(args)
  }
