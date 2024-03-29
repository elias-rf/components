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
import { groupMapFields } from './group.map-fields.js'
import { groupSchema } from './group.schema.js'
import { groupToDto } from './group.to-dto.js'
import { TGroupDtoFields, TGroupDtoKeys } from './group.type.js'

export function groupDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, groupSchema)

  const list: TList<TGroupDtoFields> = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, groupMapFields))
    return response.map((record) => groupToDto(record))
  }

  const read: TRead<TGroupDtoFields, TGroupDtoKeys> = async (args) => {
    const response = await orm.rpc.read(argsFromDto(args, groupMapFields))
    return groupToDto(response)
  }

  const count: TCount<TGroupDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, groupMapFields))
  }

  const update: TUpdate<TGroupDtoFields> = async (args) => {
    const response = await orm.rpc.update(argsFromDto(args, groupMapFields))

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      groupToDto(record as TData<TGroupDtoFields>)
    )
  }

  const del: TDel<TGroupDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, groupMapFields))
  }

  const increment: TIncrement<TGroupDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, groupMapFields))
  }

  const create: TCreate<TGroupDtoFields> = async (args) => {
    const response = await orm.rpc.create(argsFromDto(args, groupMapFields))
    return response.map((record) =>
      groupToDto(record as TData<TGroupDtoFields>)
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
