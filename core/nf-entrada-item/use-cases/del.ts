import { TDataSource } from '@/data/index.js'
import {
  TNfEntradaItemDtoFields,
  TNfEntradaItemDtoKeys,
} from '@/data/plano/nf-entrada-item/nf-entrada-item.type.js'

import { TDel } from '@/types/index.js'

export const del =
  (
    dataSource: TDataSource
  ): TDel<TNfEntradaItemDtoFields, TNfEntradaItemDtoKeys> =>
  async (args) => {
    return dataSource.plano.nfEntradaItem.del(args)
  }
