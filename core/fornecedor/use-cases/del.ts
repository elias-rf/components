import { TDataSource } from '@/data/index.js'
import {
  TFornecedorDtoFields,
  TFornecedorDtoKeys,
} from '@/data/plano/fornecedor/fornecedor.type.js'
import { TDel } from '@/types/index.js'

export const del =
  (dataSource: TDataSource): TDel<TFornecedorDtoFields, TFornecedorDtoKeys> =>
  async (args) => {
    return dataSource.plano.fornecedor.del(args)
  }
