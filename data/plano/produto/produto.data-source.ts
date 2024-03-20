import { produtoMapFields } from '@/data/plano/produto/produto.map-fields.js'
import { produtoSchema } from '@/data/plano/produto/produto.schema.js'
import { produtoToDto } from '@/data/plano/produto/produto.to-dto.js'
import {
  TProdutoDtoFields,
  TProdutoDtoKeys,
} from '@/data/plano/produto/produto.type.js'
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

export type TProdutoSchema = {
  CdProduto: number
  RzSocial: string
  CdCidade: string
  CdPais: string
  CdVendedor: string
  CGC: string
  Cidade: string
}

export function produtoDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, produtoSchema)

  const list: TList<TProdutoDtoFields> = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, produtoMapFields))
    return response.map((record) => produtoToDto(record))
  }

  const read: TRead<TProdutoDtoFields, TProdutoDtoKeys> = async (args) => {
    const response = await orm.rpc.read(argsFromDto(args, produtoMapFields))
    return produtoToDto(response)
  }

  const count: TCount<TProdutoDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, produtoMapFields))
  }

  const update: TUpdate<TProdutoDtoFields> = async (args) => {
    const response = await orm.rpc.update(argsFromDto(args, produtoMapFields))

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      produtoToDto(record as TData<TProdutoDtoFields>)
    )
  }

  const del: TDel<TProdutoDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, produtoMapFields))
  }

  const increment: TIncrement<TProdutoDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, produtoMapFields))
  }

  const create: TCreate<TProdutoDtoFields> = async (args) => {
    const response = await orm.rpc.create(argsFromDto(args, produtoMapFields))

    return response.map((record) =>
      produtoToDto(record as TData<TProdutoDtoFields>)
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
