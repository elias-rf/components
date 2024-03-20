import { TDataSource } from '@/data/index.js'
import { TNfEntradaItemDtoFields } from '@/data/plano/nf-entrada-item/nf-entrada-item.type.js'
import { TCount } from '@/types/index.js'

export const count =
  (dataSource: TDataSource): TCount<TNfEntradaItemDtoFields> =>
  async (args) => {
    return dataSource.plano.nfEntradaItem.count(args)
  }
