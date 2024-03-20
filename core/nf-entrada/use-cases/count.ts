import { TDataSource } from '@/data/index.js'
import { TNfEntradaDtoFields } from '@/data/plano/nf-entrada/nf-entrada.type.js'
import { TCount } from '@/types/index.js'

export const count =
  (dataSource: TDataSource): TCount<TNfEntradaDtoFields> =>
  async (args) => {
    return dataSource.plano.nfEntrada.count(args)
  }
