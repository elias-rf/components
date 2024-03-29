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
import { grupoSujeitoMapFields } from './grupo-sujeito.map-fields.js'
import { grupoSujeitoSchema } from './grupo-sujeito.schema.js'
import { groupToDto } from './grupo-sujeito.to-dto.js'
import {
  TGrupoSujeitoDtoFields,
  TGrupoSujeitoDtoKeys,
} from './grupo-sujeito.type.js'

export function grupoSujeitoDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, grupoSujeitoSchema)

  const list: TList<TGrupoSujeitoDtoFields> = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, grupoSujeitoMapFields)
    )
    return response.map((record) => groupToDto(record))
  }

  const read: TRead<TGrupoSujeitoDtoFields, TGrupoSujeitoDtoKeys> = async (
    args
  ) => {
    const response = await orm.rpc.read(
      argsFromDto(args, grupoSujeitoMapFields)
    )
    return groupToDto(response)
  }

  const count: TCount<TGrupoSujeitoDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, grupoSujeitoMapFields))
  }

  const update: TUpdate<TGrupoSujeitoDtoFields> = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, grupoSujeitoMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      groupToDto(record as TData<TGrupoSujeitoDtoFields>)
    )
  }

  const del: TDel<TGrupoSujeitoDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, grupoSujeitoMapFields))
  }

  const increment: TIncrement<TGrupoSujeitoDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, grupoSujeitoMapFields))
  }

  const create: TCreate<TGrupoSujeitoDtoFields> = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, grupoSujeitoMapFields)
    )
    return response.map((record) =>
      groupToDto(record as TData<TGrupoSujeitoDtoFields>)
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
