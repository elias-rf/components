import { TDataSource } from '@/data/index.js'
import { TNfSaidaLoteDtoFields } from '@/data/plano/nf-saida-lote/nf-saida-lote.type.js'
import { TCount } from '@/types/index.js'

export const count =
  (dataSource: TDataSource): TCount<TNfSaidaLoteDtoFields> =>
  async (args) => {
    return dataSource.plano.nfSaidaLote.count(args)
  }
