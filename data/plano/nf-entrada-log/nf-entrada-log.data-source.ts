import { nfEntradaLogMapFields } from '@/data/plano/nf-entrada-log/nf-entrada-log.map-fields.js'
import { nfEntradaLogSchema } from '@/data/plano/nf-entrada-log/nf-entrada-log.schema.js'
import { nfEntradaLogToDto } from '@/data/plano/nf-entrada-log/nf-entrada-log.to-dto.js'
import {
  TNfEntradaLogDtoFields,
  TNfEntradaLogDtoKeys,
} from '@/data/plano/nf-entrada-log/nf-entrada-log.type.js'
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

export function nfEntradaLogDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, nfEntradaLogSchema)

  const list: TList<TNfEntradaLogDtoFields> = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, nfEntradaLogMapFields)
    )
    return response.map((record) => nfEntradaLogToDto(record))
  }

  const read: TRead<TNfEntradaLogDtoFields, TNfEntradaLogDtoKeys> = async (
    args
  ) => {
    const response = await orm.rpc.read(
      argsFromDto(args, nfEntradaLogMapFields)
    )
    return nfEntradaLogToDto(response)
  }

  const count: TCount<TNfEntradaLogDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, nfEntradaLogMapFields))
  }

  const update: TUpdate<TNfEntradaLogDtoFields> = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, nfEntradaLogMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      nfEntradaLogToDto(record as TData<TNfEntradaLogDtoFields>)
    )
  }

  const del: TDel<TNfEntradaLogDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, nfEntradaLogMapFields))
  }

  const increment: TIncrement<TNfEntradaLogDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, nfEntradaLogMapFields))
  }

  const create: TCreate<TNfEntradaLogDtoFields> = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, nfEntradaLogMapFields)
    )

    return response.map((record) =>
      nfEntradaLogToDto(record as TData<TNfEntradaLogDtoFields>)
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
