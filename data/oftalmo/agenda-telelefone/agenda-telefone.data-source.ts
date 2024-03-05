import {
  TAgendaTelefoneDtoFields,
  TAgendaTelefoneDtoKeys,
} from '@/core/agenda-telefone/agenda-telefone.type.js'
import { agendaTelefoneMapFields } from '@/data/oftalmo/agenda-telelefone/agenda-telefone.map-fields.js'
import { agendaTelefoneSchema } from '@/data/oftalmo/agenda-telelefone/agenda-telefone.schema.js'
import { agendaTelefoneToDto } from '@/data/oftalmo/agenda-telelefone/agenda-telefone.to-dto.js'
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

export function agendaTelefoneDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, agendaTelefoneSchema)

  const list: TList<TAgendaTelefoneDtoFields> = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, agendaTelefoneMapFields)
    )
    return response.map((record) => agendaTelefoneToDto(record))
  }

  const read: TRead<TAgendaTelefoneDtoFields, TAgendaTelefoneDtoKeys> = async (
    args
  ) => {
    const response = await orm.rpc.read(
      argsFromDto(args, agendaTelefoneMapFields)
    )
    return agendaTelefoneToDto(response)
  }

  const count: TCount<TAgendaTelefoneDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, agendaTelefoneMapFields))
  }

  const update: TUpdate<TAgendaTelefoneDtoFields> = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, agendaTelefoneMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      agendaTelefoneToDto(record as TData<TAgendaTelefoneDtoFields>)
    )
  }

  const del: TDel<TAgendaTelefoneDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, agendaTelefoneMapFields))
  }

  const increment: TIncrement<TAgendaTelefoneDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, agendaTelefoneMapFields))
  }

  const create: TCreate<TAgendaTelefoneDtoFields> = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, agendaTelefoneMapFields)
    )
    return response.map((record) =>
      agendaTelefoneToDto(record as TData<TAgendaTelefoneDtoFields>)
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
