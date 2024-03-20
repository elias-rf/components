import { TDataSource } from '@/data/index.js'
import { TEsterilizacaoExternaDtoFields } from '@/data/oftalmo/esterilizacao-externa/esterilizacao-externa.type.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (dataSource: TDataSource): TUpdate<TEsterilizacaoExternaDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.esterilizacaoExterna.update(args)
  }
