import { TDataSource } from '@/data/index.js'
import { TNfSaidaDtoFields } from '@/data/plano/nf-saida/nf-saida.type.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (dataSource: TDataSource): TUpdate<TNfSaidaDtoFields> =>
  async (args) => {
    return dataSource.plano.nfSaida.update(args)
  }
