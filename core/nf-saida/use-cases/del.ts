import { TDataSource } from '@/data/index.js'
import {
  TNfSaidaDtoFields,
  TNfSaidaDtoKeys,
} from '@/data/plano/nf-saida/nf-saida.type.js'
import { TDel } from '@/types/index.js'

export const del =
  (dataSource: TDataSource): TDel<TNfSaidaDtoFields, TNfSaidaDtoKeys> =>
  async (args) => {
    return dataSource.plano.nfSaida.del(args)
  }
