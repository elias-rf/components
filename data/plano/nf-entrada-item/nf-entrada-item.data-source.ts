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
import { nfEntradaItemMapFields } from './nf-entrada-item.map-fields.js'
import { nfEntradaItemSchema } from './nf-entrada-item.schema.js'
import { nfEntradaItemToDto } from './nf-entrada-item.to-dto.js'
import {
  TNfEntradaItemDtoFields,
  TNfEntradaItemDtoKeys,
} from './nf-entrada-item.type.js'

export function nfEntradaItemDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, nfEntradaItemSchema)

  const list: TList<TNfEntradaItemDtoFields> = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, nfEntradaItemMapFields)
    )
    return response.map((record) => nfEntradaItemToDto(record))
  }

  const read: TRead<TNfEntradaItemDtoFields, TNfEntradaItemDtoKeys> = async (
    args
  ) => {
    const response = await orm.rpc.read(
      argsFromDto(args, nfEntradaItemMapFields)
    )
    return nfEntradaItemToDto(response)
  }

  const count: TCount<TNfEntradaItemDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, nfEntradaItemMapFields))
  }

  const update: TUpdate<TNfEntradaItemDtoFields> = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, nfEntradaItemMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      nfEntradaItemToDto(record as TData<TNfEntradaItemDtoFields>)
    )
  }

  const del: TDel<TNfEntradaItemDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, nfEntradaItemMapFields))
  }

  const increment: TIncrement<TNfEntradaItemDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, nfEntradaItemMapFields))
  }

  const create: TCreate<TNfEntradaItemDtoFields> = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, nfEntradaItemMapFields)
    )

    return response.map((record) =>
      nfEntradaItemToDto(record as TData<TNfEntradaItemDtoFields>)
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
