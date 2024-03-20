import { TDataSource } from '@/data/index.js'
import { TNfSaidaLoteDtoFields } from '@/data/plano/nf-saida-lote/nf-saida-lote.type.js'
import { TCreate } from '@/types/index.js'

export const create =
  (dataSource: TDataSource): TCreate<TNfSaidaLoteDtoFields> =>
  async (args) => {
    return dataSource.plano.nfSaidaLote.create(args)
  }
