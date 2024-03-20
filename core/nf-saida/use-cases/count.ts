import { TDataSource } from '@/data/index.js'
import { TNfSaidaDtoFields } from '@/data/plano/nf-saida/nf-saida.type.js'
import { TCount } from '@/types/index.js'

export const count =
  (dataSource: TDataSource): TCount<TNfSaidaDtoFields> =>
  async (args) => {
    return dataSource.plano.nfSaida.count(args)
  }
