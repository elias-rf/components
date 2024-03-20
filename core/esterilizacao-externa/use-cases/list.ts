import { TDataSource } from '@/data/index.js'
import { TEsterilizacaoExternaDtoFields } from '@/data/oftalmo/esterilizacao-externa/esterilizacao-externa.type.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource): TList<TEsterilizacaoExternaDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.esterilizacaoExterna.list(args)
  }
