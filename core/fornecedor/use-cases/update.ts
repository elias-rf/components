import { TDataSource } from '@/data/index.js'
import { TFornecedorDtoFields } from '@/data/plano/fornecedor/fornecedor.type.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (dataSource: TDataSource): TUpdate<TFornecedorDtoFields> =>
  async (args) => {
    return dataSource.plano.fornecedor.update(args)
  }
