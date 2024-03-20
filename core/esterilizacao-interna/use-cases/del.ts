import { TDataSource } from '@/data/index.js'
import {
  TEsterilizacaoInternaDtoFields,
  TEsterilizacaoInternaDtoKeys,
} from '@/data/oftalmo/esterilizacao-interna/esterilizacao-interna.type.js'
import { TDel } from '@/types/index.js'

export const del =
  (
    dataSource: TDataSource
  ): TDel<TEsterilizacaoInternaDtoFields, TEsterilizacaoInternaDtoKeys> =>
  async (args) => {
    return dataSource.oftalmo.esterilizacaoInterna.del(args)
  }
