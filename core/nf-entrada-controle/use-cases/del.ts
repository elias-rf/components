import { TDataSource } from '@/data/index.js'
import {
  TNfEntradaControleDtoFields,
  TNfEntradaControleDtoKeys,
} from '@/data/plano/nf-entrada-controle/nf-entrada-controle.type.js'

import { TDel } from '@/types/index.js'

export const del =
  (
    dataSource: TDataSource
  ): TDel<TNfEntradaControleDtoFields, TNfEntradaControleDtoKeys> =>
  async (args) => {
    return dataSource.plano.nfEntradaControle.del(args)
  }
