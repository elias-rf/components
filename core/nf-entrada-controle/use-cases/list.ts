import { TDataSource } from '@/data/index.js'
import { TNfEntradaControleDtoFields } from '@/data/plano/nf-entrada-controle/nf-entrada-controle.type.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource): TList<TNfEntradaControleDtoFields> =>
  async (args) => {
    return dataSource.plano.nfEntradaControle.list(args)
  }
