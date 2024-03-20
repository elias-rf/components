import { TDataSource } from '@/data/index.js'
import { TNfEntradaItemDtoFields } from '@/data/plano/nf-entrada-item/nf-entrada-item.type.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource): TList<TNfEntradaItemDtoFields> =>
  async (args) => {
    return dataSource.plano.nfEntradaItem.list(args)
  }
