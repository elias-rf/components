import { TDataSource } from '@/data/index.js'
import { TEsterilizacaoInternaDtoFields } from '@/data/oftalmo/esterilizacao-interna/esterilizacao-interna.type.js'
import { TCount } from '@/types/index.js'

export const count =
  (dataSource: TDataSource): TCount<TEsterilizacaoInternaDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.esterilizacaoInterna.count(args)
  }
