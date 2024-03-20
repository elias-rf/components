import { TDataSource } from '@/data/index.js'
import { TNfEntradaDtoFields } from '@/data/plano/nf-entrada/nf-entrada.type.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource): TList<TNfEntradaDtoFields> =>
  async (args) => {
    return dataSource.plano.nfEntrada.list(args)
  }
