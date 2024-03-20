import { TDataSource } from '@/data/index.js'
import {
  TNfEntradaDtoFields,
  TNfEntradaDtoKeys,
} from '@/data/plano/nf-entrada/nf-entrada.type.js'

import { TDel } from '@/types/index.js'

export const del =
  (dataSource: TDataSource): TDel<TNfEntradaDtoFields, TNfEntradaDtoKeys> =>
  async (args) => {
    return dataSource.plano.nfEntrada.del(args)
  }
