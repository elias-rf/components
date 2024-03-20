import { TDataSource } from '@/data/index.js'
import { TNfEntradaControleDtoFields } from '@/data/plano/nf-entrada-controle/nf-entrada-controle.type.js'
import { TCreate } from '@/types/index.js'

export const create =
  (dataSource: TDataSource): TCreate<TNfEntradaControleDtoFields> =>
  async (args) => {
    return dataSource.plano.nfEntradaControle.create(args)
  }
