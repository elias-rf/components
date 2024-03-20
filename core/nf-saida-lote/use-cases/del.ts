import { TDataSource } from '@/data/index.js'
import {
  TNfSaidaLoteDtoFields,
  TNfSaidaLoteDtoKeys,
} from '@/data/plano/nf-saida-lote/nf-saida-lote.type.js'
import { TDel } from '@/types/index.js'

export const del =
  (dataSource: TDataSource): TDel<TNfSaidaLoteDtoFields, TNfSaidaLoteDtoKeys> =>
  async (args) => {
    return dataSource.plano.nfSaidaLote.del(args)
  }
