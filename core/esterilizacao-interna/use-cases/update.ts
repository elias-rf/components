import { TDataSource } from '@/data/index.js'
import { TEsterilizacaoInternaDtoFields } from '@/data/oftalmo/esterilizacao-interna/esterilizacao-interna.type.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (dataSource: TDataSource): TUpdate<TEsterilizacaoInternaDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.esterilizacaoInterna.update(args)
  }
