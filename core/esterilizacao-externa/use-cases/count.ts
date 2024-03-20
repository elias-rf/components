import { TDataSource } from '@/data/index.js'
import { TEsterilizacaoExternaDtoFields } from '@/data/oftalmo/esterilizacao-externa/esterilizacao-externa.type.js'
import { TCount } from '@/types/index.js'

export const count =
  (dataSource: TDataSource): TCount<TEsterilizacaoExternaDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.esterilizacaoExterna.count(args)
  }
