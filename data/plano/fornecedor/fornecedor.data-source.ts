import { fornecedorMapFields } from '@/data/plano/fornecedor/fornecedor.map-fields.js'
import { fornecedorSchema } from '@/data/plano/fornecedor/fornecedor.schema.js'
import { fornecedorToDto } from '@/data/plano/fornecedor/fornecedor.to-dto.js'
import {
  TFornecedorDtoFields,
  TFornecedorDtoKeys,
} from '@/data/plano/fornecedor/fornecedor.type.js'
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

export type TFornecedorSchema = {
  CdFornecedor: number
  RzSocial: string
  CdCidade: string
  CdPais: string
  CdVendedor: string
  CGC: string
  Cidade: string
}

export function fornecedorDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, fornecedorSchema)

  const list: TList<TFornecedorDtoFields> = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, fornecedorMapFields))
    return response.map((record) => fornecedorToDto(record))
  }

  const read: TRead<TFornecedorDtoFields, TFornecedorDtoKeys> = async (
    args
  ) => {
    const response = await orm.rpc.read(argsFromDto(args, fornecedorMapFields))
    return fornecedorToDto(response)
  }

  const count: TCount<TFornecedorDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, fornecedorMapFields))
  }

  const update: TUpdate<TFornecedorDtoFields> = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, fornecedorMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      fornecedorToDto(record as TData<TFornecedorDtoFields>)
    )
  }

  const del: TDel<TFornecedorDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, fornecedorMapFields))
  }

  const increment: TIncrement<TFornecedorDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, fornecedorMapFields))
  }

  const create: TCreate<TFornecedorDtoFields> = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, fornecedorMapFields)
    )

    return response.map((record) =>
      fornecedorToDto(record as TData<TFornecedorDtoFields>)
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
