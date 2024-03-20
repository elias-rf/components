import { produtoControleMapFields } from '@/data/plano/produto-controle/produto-controle.map-fields.js'
import { produtoControleSchema } from '@/data/plano/produto-controle/produto-controle.schema.js'
import { produtoControleToDto } from '@/data/plano/produto-controle/produto-controle.to-dto.js'
import {
  TProdutoControleDtoFields,
  TProdutoControleDtoKeys,
} from '@/data/plano/produto-controle/produto-controle.type.js'
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

export function produtoControleDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, produtoControleSchema)

  const list: TList<TProdutoControleDtoFields> = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, produtoControleMapFields)
    )
    return response.map((record) => produtoControleToDto(record))
  }

  const read: TRead<
    TProdutoControleDtoFields,
    TProdutoControleDtoKeys
  > = async (args) => {
    const response = await orm.rpc.read(
      argsFromDto(args, produtoControleMapFields)
    )
    return produtoControleToDto(response)
  }

  const count: TCount<TProdutoControleDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, produtoControleMapFields))
  }

  const update: TUpdate<TProdutoControleDtoFields> = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, produtoControleMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      produtoControleToDto(record as TData<TProdutoControleDtoFields>)
    )
  }

  const del: TDel<TProdutoControleDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, produtoControleMapFields))
  }

  const increment: TIncrement<TProdutoControleDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, produtoControleMapFields))
  }

  const create: TCreate<TProdutoControleDtoFields> = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, produtoControleMapFields)
    )

    return response.map((record) =>
      produtoControleToDto(record as TData<TProdutoControleDtoFields>)
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
