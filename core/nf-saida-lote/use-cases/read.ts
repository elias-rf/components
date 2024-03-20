import { TDataSource } from '@/data/index.js'
import {
  TNfSaidaLoteDtoFields,
  TNfSaidaLoteDtoKeys,
} from '@/data/plano/nf-saida-lote/nf-saida-lote.type.js'
import { TRead } from '@/types/index.js'

export const read =
  (
    dataSource: TDataSource
  ): TRead<TNfSaidaLoteDtoFields, TNfSaidaLoteDtoKeys> =>
  async (args) => {
    return dataSource.plano.nfSaidaLote.read(args)
  }
