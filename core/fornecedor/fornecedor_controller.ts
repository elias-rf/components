import { fornecedorUseCases } from '@/core/fornecedor/use-cases/index.js'
import { dataSource } from '@/data/index.js'
import {
  TFornecedorFields,
  TFornecedorKeys,
} from '@/data/plano/fornecedor/fornecedor.type.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/index.js'

const useCases = fornecedorUseCases(dataSource)

export function fornecedorController(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TFornecedorFields, TFornecedorKeys>(db, schema)
  return {
    fornecedor_list: orm.rpc.list,
    fornecedor_read: orm.rpc.read,
    fornecedor_count: orm.rpc.count,
    fornecedor_update: orm.rpc.update,
    fornecedor_create: orm.rpc.create,
    fornecedor_del: orm.rpc.del,
    fornecedor_increment: orm.rpc.increment,
  }
}
