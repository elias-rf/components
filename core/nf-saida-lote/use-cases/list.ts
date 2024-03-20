import { TDataSource } from '@/data/index.js'
import { TNfSaidaLoteDtoFields } from '@/data/plano/nf-saida-lote/nf-saida-lote.type.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource): TList<TNfSaidaLoteDtoFields> =>
  async (args) => {
    return dataSource.plano.nfSaidaLote.list(args)
  }
