import { TDataSource } from '@/data/index.js'
import {
  TNfEntradaLogDtoFields,
  TNfEntradaLogDtoKeys,
} from '@/data/plano/nf-entrada-log/nf-entrada-log.type.js'

import { TDel } from '@/types/index.js'

export const del =
  (
    dataSource: TDataSource
  ): TDel<TNfEntradaLogDtoFields, TNfEntradaLogDtoKeys> =>
  async (args) => {
    return dataSource.plano.nfEntradaLog.del(args)
  }
