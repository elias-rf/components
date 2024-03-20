import { TDataSource } from '@/data/index.js'
import { TNfEntradaControleDtoFields } from '@/data/plano/nf-entrada-controle/nf-entrada-controle.type.js'
import { TCount } from '@/types/index.js'

export const count =
  (dataSource: TDataSource): TCount<TNfEntradaControleDtoFields> =>
  async (args) => {
    return dataSource.plano.nfEntradaControle.count(args)
  }
