import { clienteMapFields } from '@/data/plano/cliente/cliente.map-fields.js'
import { clienteSchema } from '@/data/plano/cliente/cliente.schema.js'
import { clienteToDto } from '@/data/plano/cliente/cliente.to-dto.js'
import {
  TClienteDtoFields,
  TClienteDtoKeys,
} from '@/data/plano/cliente/cliente.type.js'
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

export type TClienteSchema = {
  CdCliente: number
  RzSocial: string
  CdCidade: string
  CdPais: string
  CdVendedor: string
  CGC: string
  Cidade: string
}

export function clienteDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, clienteSchema)

  const list: TList<TClienteDtoFields> = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, clienteMapFields))
    return response.map((record) => clienteToDto(record))
  }

  const read: TRead<TClienteDtoFields, TClienteDtoKeys> = async (args) => {
    const response = await orm.rpc.read(argsFromDto(args, clienteMapFields))
    return clienteToDto(response)
  }

  const count: TCount<TClienteDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, clienteMapFields))
  }

  const update: TUpdate<TClienteDtoFields> = async (args) => {
    const response = await orm.rpc.update(argsFromDto(args, clienteMapFields))

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      clienteToDto(record as TData<TClienteDtoFields>)
    )
  }

  const del: TDel<TClienteDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, clienteMapFields))
  }

  const increment: TIncrement<TClienteDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, clienteMapFields))
  }

  const create: TCreate<TClienteDtoFields> = async (args) => {
    const response = await orm.rpc.create(argsFromDto(args, clienteMapFields))

    return response.map((record) =>
      clienteToDto(record as TData<TClienteDtoFields>)
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
