import { TDataSource } from '@/data/index.js'
import { TEsterilizacaoInternaDtoFields } from '@/data/oftalmo/esterilizacao-interna/esterilizacao-interna.type.js'
import { TCreate } from '@/types/index.js'

export const create =
  (dataSource: TDataSource): TCreate<TEsterilizacaoInternaDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.esterilizacaoInterna.create(args)
  }
