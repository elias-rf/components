import { TDataSource } from '@/data/index.js'
import { TNfEntradaItemDtoFields } from '@/data/plano/nf-entrada-item/nf-entrada-item.type.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (dataSource: TDataSource): TUpdate<TNfEntradaItemDtoFields> =>
  async (args) => {
    return dataSource.plano.nfEntradaItem.update(args)
  }
