import { TDataSource } from '@/data/index.js'
import { TNfEntradaItemDtoFields } from '@/data/plano/nf-entrada-item/nf-entrada-item.type.js'
import { TCreate } from '@/types/index.js'

export const create =
  (dataSource: TDataSource): TCreate<TNfEntradaItemDtoFields> =>
  async (args) => {
    return dataSource.plano.nfEntradaItem.create(args)
  }
