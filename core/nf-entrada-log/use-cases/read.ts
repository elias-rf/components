import { TDataSource } from '@/data/index.js'
import {
  TNfEntradaLogDtoFields,
  TNfEntradaLogDtoKeys,
} from '@/data/plano/nf-entrada-log/nf-entrada-log.type.js'

import { TRead } from '@/types/index.js'

export const read =
  (
    dataSource: TDataSource
  ): TRead<TNfEntradaLogDtoFields, TNfEntradaLogDtoKeys> =>
  async (args) => {
    return dataSource.plano.nfEntradaLog.read(args)
  }
