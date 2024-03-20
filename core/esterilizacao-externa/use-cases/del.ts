import { TDataSource } from '@/data/index.js'
import {
  TEsterilizacaoExternaDtoFields,
  TEsterilizacaoExternaDtoKeys,
} from '@/data/oftalmo/esterilizacao-externa/esterilizacao-externa.type.js'
import { TDel } from '@/types/index.js'

export const del =
  (
    dataSource: TDataSource
  ): TDel<TEsterilizacaoExternaDtoFields, TEsterilizacaoExternaDtoKeys> =>
  async (args) => {
    return dataSource.oftalmo.esterilizacaoExterna.del(args)
  }
