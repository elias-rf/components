import { TDataSource } from '@/data/index.js'
import {
  TEsterilizacaoExternaDtoFields,
  TEsterilizacaoExternaDtoKeys,
} from '@/data/oftalmo/esterilizacao-externa/esterilizacao-externa.type.js'
import { TRead } from '@/types/index.js'

export const read =
  (
    dataSource: TDataSource
  ): TRead<TEsterilizacaoExternaDtoFields, TEsterilizacaoExternaDtoKeys> =>
  async (args) => {
    return dataSource.oftalmo.esterilizacaoExterna.read(args)
  }
