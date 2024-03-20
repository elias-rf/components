import { TDataSource } from '@/data/index.js'
import {
  TNfEntradaControleDtoFields,
  TNfEntradaControleDtoKeys,
} from '@/data/plano/nf-entrada-controle/nf-entrada-controle.type.js'

import { TRead } from '@/types/index.js'

export const read =
  (
    dataSource: TDataSource
  ): TRead<TNfEntradaControleDtoFields, TNfEntradaControleDtoKeys> =>
  async (args) => {
    return dataSource.plano.nfEntradaControle.read(args)
  }
