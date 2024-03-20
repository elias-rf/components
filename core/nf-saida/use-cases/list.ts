import { TDataSource } from '@/data/index.js'
import { TNfSaidaDtoFields } from '@/data/plano/nf-saida/nf-saida.type.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource): TList<TNfSaidaDtoFields> =>
  async (args) => {
    return dataSource.plano.nfSaida.list(args)
  }
