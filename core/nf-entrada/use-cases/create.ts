import { TDataSource } from '@/data/index.js'
import { TNfEntradaDtoFields } from '@/data/plano/nf-entrada/nf-entrada.type.js'
import { TCreate } from '@/types/index.js'

export const create =
  (dataSource: TDataSource): TCreate<TNfEntradaDtoFields> =>
  async (args) => {
    return dataSource.plano.nfEntrada.create(args)
  }
