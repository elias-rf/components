import { estoqueMapFields } from '@/data/plano/estoque/estoque.map-fields.js'
import { estoqueSchema } from '@/data/plano/estoque/estoque.schema.js'
import { estoqueToDto } from '@/data/plano/estoque/estoque.to-dto.js'
import {
  TEstoqueDtoFields,
  TEstoqueDtoKeys,
} from '@/data/plano/estoque/estoque.type.js'
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

export type TEstoqueSchema = {
  CdEstoque: number
  RzSocial: string
  CdCidade: string
  CdPais: string
  CdVendedor: string
  CGC: string
  Cidade: string
}

export function estoqueDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, estoqueSchema)

  const list: TList<TEstoqueDtoFields> = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, estoqueMapFields))
    return response.map((record) => estoqueToDto(record))
  }

  const read: TRead<TEstoqueDtoFields, TEstoqueDtoKeys> = async (args) => {
    const response = await orm.rpc.read(argsFromDto(args, estoqueMapFields))
    return estoqueToDto(response)
  }

  const count: TCount<TEstoqueDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, estoqueMapFields))
  }

  const update: TUpdate<TEstoqueDtoFields> = async (args) => {
    const response = await orm.rpc.update(argsFromDto(args, estoqueMapFields))

    if (typeof response === 'number') {
      return response
    }
    return response.map((record: TData<TEstoqueDtoFields>) =>
      estoqueToDto(record)
    )
  }

  const del: TDel<TEstoqueDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, estoqueMapFields))
  }

  const increment: TIncrement<TEstoqueDtoFields> = async (args) => {
    const response = await orm.rpc.increment(
      argsFromDto(args, estoqueMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record: TData<TEstoqueDtoFields>) =>
      estoqueToDto(record)
    )
  }

  const create: TCreate<TEstoqueDtoFields> = async (args) => {
    const response = await orm.rpc.create(argsFromDto(args, estoqueMapFields))

    return response.map((record) =>
      estoqueToDto(record as TData<TEstoqueDtoFields>)
    )
  }

  return {
    list,
    read,
    count,
    update,
    create,
    del,
    increment,
  }
}
