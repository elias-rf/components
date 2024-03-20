import { TDataSource } from '@/data/index.js'
import { TNfEntradaDtoFields } from '@/data/plano/nf-entrada/nf-entrada.type.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (dataSource: TDataSource): TUpdate<TNfEntradaDtoFields> =>
  async (args) => {
    return dataSource.plano.nfEntrada.update(args)
  }
