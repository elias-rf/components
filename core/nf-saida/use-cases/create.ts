import { TDataSource } from '@/data/index.js'
import { TNfSaidaDtoFields } from '@/data/plano/nf-saida/nf-saida.type.js'
import { TCreate } from '@/types/index.js'

export const create =
  (dataSource: TDataSource): TCreate<TNfSaidaDtoFields> =>
  async (args) => {
    return dataSource.plano.nfSaida.create(args)
  }
