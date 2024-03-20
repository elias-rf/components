import { TDataSource } from '@/data/index.js'
import { TFornecedorDtoFields } from '@/data/plano/fornecedor/fornecedor.type.js'
import { TCount } from '@/types/index.js'

export const count =
  (dataSource: TDataSource): TCount<TFornecedorDtoFields> =>
  async (args) => {
    return dataSource.plano.fornecedor.count(args)
  }
