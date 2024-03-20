import { TDataSource } from '@/data/index.js'
import {
  TNfEntradaItemDtoFields,
  TNfEntradaItemDtoKeys,
} from '@/data/plano/nf-entrada-item/nf-entrada-item.type.js'

import { TRead } from '@/types/index.js'

export const read =
  (
    dataSource: TDataSource
  ): TRead<TNfEntradaItemDtoFields, TNfEntradaItemDtoKeys> =>
  async (args) => {
    return dataSource.plano.nfEntradaItem.read(args)
  }
