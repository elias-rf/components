import {
  TCount,
  TCreate,
  TData,
  TDel,
  TIncrement,
  TList,
  TRead,
  TUpdate,
} from '@/types/query.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTableDataSource } from '@/utils/orm/orm-data-source/index.js'
import { argsFromDto } from '@/utils/orm/utils/args-from-dto.js'
import { produtoItemMapFields } from './produto-item.map-fields.js'
import { produtoItemSchema } from './produto-item.schema.js'
import { produtoItemToDto } from './produto-item.to-dto.js'
import {
  TProdutoItemDtoFields,
  TProdutoItemDtoKeys,
} from './produto-item.type.js'

export function produtoItemDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, produtoItemSchema)

  const list: TList<TProdutoItemDtoFields> = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, produtoItemMapFields))
    return response.map((record) => produtoItemToDto(record))
  }

  const read: TRead<TProdutoItemDtoFields, TProdutoItemDtoKeys> = async (
    args
  ) => {
    const response = await orm.rpc.read(argsFromDto(args, produtoItemMapFields))
    return produtoItemToDto(response)
  }

  const count: TCount<TProdutoItemDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, produtoItemMapFields))
  }

  const update: TUpdate<TProdutoItemDtoFields> = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, produtoItemMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      produtoItemToDto(record as TData<TProdutoItemDtoFields>)
    )
  }

  const del: TDel<TProdutoItemDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, produtoItemMapFields))
  }

  const increment: TIncrement<TProdutoItemDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, produtoItemMapFields))
  }

  const create: TCreate<TProdutoItemDtoFields> = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, produtoItemMapFields)
    )

    return response.map((record) =>
      produtoItemToDto(record as TData<TProdutoItemDtoFields>)
    )
  }

  return {
    orm,
    list,
    read,
    count,
    update,
    create,
    del,
    increment,
  }
}
