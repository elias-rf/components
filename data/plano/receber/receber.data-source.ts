import { receberMapFields } from '@/data/plano/receber/receber.map-fields.js'
import { receberSchema } from '@/data/plano/receber/receber.schema.js'
import { receberToDto } from '@/data/plano/receber/receber.to-dto.js'
import {
  TReceberDtoFields,
  TReceberDtoKeys,
} from '@/data/plano/receber/receber.type.js'
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

export type TReceberSchema = {
  CdReceber: number
  RzSocial: string
  CdCidade: string
  CdPais: string
  CdVendedor: string
  CGC: string
  Cidade: string
}

export function receberDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, receberSchema)

  const list: TList<TReceberDtoFields> = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, receberMapFields))
    return response.map((record) => receberToDto(record))
  }

  const read: TRead<TReceberDtoFields, TReceberDtoKeys> = async (args) => {
    const response = await orm.rpc.read(argsFromDto(args, receberMapFields))
    return receberToDto(response)
  }

  const count: TCount<TReceberDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, receberMapFields))
  }

  const update: TUpdate<TReceberDtoFields> = async (args) => {
    const response = await orm.rpc.update(argsFromDto(args, receberMapFields))

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      receberToDto(record as TData<TReceberDtoFields>)
    )
  }

  const del: TDel<TReceberDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, receberMapFields))
  }

  const increment: TIncrement<TReceberDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, receberMapFields))
  }

  const create: TCreate<TReceberDtoFields> = async (args) => {
    const response = await orm.rpc.create(argsFromDto(args, receberMapFields))

    return response.map((record) =>
      receberToDto(record as TData<TReceberDtoFields>)
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
