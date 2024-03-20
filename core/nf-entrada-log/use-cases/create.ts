import { TDataSource } from '@/data/index.js'
import { TNfEntradaLogDtoFields } from '@/data/plano/nf-entrada-log/nf-entrada-log.type.js'
import { TCreate } from '@/types/index.js'

export const create =
  (dataSource: TDataSource): TCreate<TNfEntradaLogDtoFields> =>
  async (args) => {
    return dataSource.plano.nfEntradaLog.create(args)
  }
