import { TDataSource } from '@/data/index.js'
import { TFornecedorDtoFields } from '@/data/plano/fornecedor/fornecedor.type.js'
import { TCreate } from '@/types/index.js'

export const create =
  (dataSource: TDataSource): TCreate<TFornecedorDtoFields> =>
  async (args) => {
    return dataSource.plano.fornecedor.create(args)
  }
