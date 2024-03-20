import { TDataSource } from '@/data/index.js'
import { TNfEntradaControleDtoFields } from '@/data/plano/nf-entrada-controle/nf-entrada-controle.type.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (dataSource: TDataSource): TUpdate<TNfEntradaControleDtoFields> =>
  async (args) => {
    return dataSource.plano.nfEntradaControle.update(args)
  }
