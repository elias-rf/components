import { TDataSource } from '@/data/index.js'
import {
  TFornecedorDtoFields,
  TFornecedorDtoKeys,
} from '@/data/plano/fornecedor/fornecedor.type.js'
import { TRead } from '@/types/index.js'

export const read =
  (dataSource: TDataSource): TRead<TFornecedorDtoFields, TFornecedorDtoKeys> =>
  async (args) => {
    return dataSource.plano.fornecedor.read(args)
  }
