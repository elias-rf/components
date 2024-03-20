import { TDataSource } from '@/data/index.js'
import {
  TNfSaidaDtoFields,
  TNfSaidaDtoKeys,
} from '@/data/plano/nf-saida/nf-saida.type.js'
import { TRead } from '@/types/index.js'

export const read =
  (dataSource: TDataSource): TRead<TNfSaidaDtoFields, TNfSaidaDtoKeys> =>
  async (args) => {
    return dataSource.plano.nfSaida.read(args)
  }
