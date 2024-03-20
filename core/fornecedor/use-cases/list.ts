import { TDataSource } from '@/data/index.js'
import { TFornecedorDtoFields } from '@/data/plano/fornecedor/fornecedor.type.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource): TList<TFornecedorDtoFields> =>
  async (args) => {
    return dataSource.plano.fornecedor.list(args)
  }
