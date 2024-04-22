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
import { grupoMapFields } from './grupo.map-fields.js'
import { grupoSchema } from './grupo.schema.js'
import { grupoToDto } from './grupo.to-dto.js'
import { TGrupoDtoFields, TGrupoDtoKeys } from './grupo.type.js'

export function grupoDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, grupoSchema)

  const list: TList<TGrupoDtoFields> = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, grupoMapFields))
    return response.map((record) => grupoToDto(record))
  }

  const read: TRead<TGrupoDtoFields, TGrupoDtoKeys> = async (args) => {
    const response = await orm.rpc.read(argsFromDto(args, grupoMapFields))
    return grupoToDto(response)
  }

  const count: TCount<TGrupoDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, grupoMapFields))
  }

  const update: TUpdate<TGrupoDtoFields> = async (args) => {
    const response = await orm.rpc.update(argsFromDto(args, grupoMapFields))

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      grupoToDto(record as TData<TGrupoDtoFields>)
    )
  }

  const del: TDel<TGrupoDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, grupoMapFields))
  }

  const increment: TIncrement<TGrupoDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, grupoMapFields))
  }

  const create: TCreate<TGrupoDtoFields> = async (args) => {
    const response = await orm.rpc.create(argsFromDto(args, grupoMapFields))
    return response.map((record) =>
      grupoToDto(record as TData<TGrupoDtoFields>)
    )
  }

  return {
    orm,
    count,
    create,
    del,
    increment,
    list,
    read,
    update,
  }
}
