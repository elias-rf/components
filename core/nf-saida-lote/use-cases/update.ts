import { TDataSource } from '@/data/index.js'
import { TNfSaidaLoteDtoFields } from '@/data/plano/nf-saida-lote/nf-saida-lote.type.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (dataSource: TDataSource): TUpdate<TNfSaidaLoteDtoFields> =>
  async (args) => {
    return dataSource.plano.nfSaidaLote.update(args)
  }
