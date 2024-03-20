import { TDataSource } from '@/data/index.js'
import {
  TEsterilizacaoInternaDtoFields,
  TEsterilizacaoInternaDtoKeys,
} from '@/data/oftalmo/esterilizacao-interna/esterilizacao-interna.type.js'
import { TRead } from '@/types/index.js'

export const read =
  (
    dataSource: TDataSource
  ): TRead<TEsterilizacaoInternaDtoFields, TEsterilizacaoInternaDtoKeys> =>
  async (args) => {
    return dataSource.oftalmo.esterilizacaoInterna.read(args)
  }
