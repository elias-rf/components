import { TDataSource } from '@/data/index.js'
import { TEsterilizacaoExternaDtoFields } from '@/data/oftalmo/esterilizacao-externa/esterilizacao-externa.type.js'
import { TCreate } from '@/types/index.js'

export const create =
  (dataSource: TDataSource): TCreate<TEsterilizacaoExternaDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.esterilizacaoExterna.create(args)
  }
