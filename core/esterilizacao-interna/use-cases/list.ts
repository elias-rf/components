import { TDataSource } from '@/data/index.js'
import { TEsterilizacaoInternaDtoFields } from '@/data/oftalmo/esterilizacao-interna/esterilizacao-interna.type.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource): TList<TEsterilizacaoInternaDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.esterilizacaoInterna.list(args)
  }
