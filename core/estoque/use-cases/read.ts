import { TDataSource } from '@/data/index.js'
import {
  TNfEntradaDtoFields,
  TNfEntradaDtoKeys,
} from '@/data/plano/nf-entrada/nf-entrada.type.js'
import { TRead } from '@/types/index.js'

export const read =
  (dataSource: TDataSource): TRead<TNfEntradaDtoFields, TNfEntradaDtoKeys> =>
  async (args) => {
    return dataSource.plano.nfEntrada.read(args)
  }
