import { esterilizacaoInternaMapFields } from '@/data/oftalmo/esterilizacao-interna/esterilizacao-interna.map-fields.js'
import { esterilizacaoInternaSchema } from '@/data/oftalmo/esterilizacao-interna/esterilizacao-interna.schema.js'
import { esterilizacaoInternaToDto } from '@/data/oftalmo/esterilizacao-interna/esterilizacao-interna.to-dto.js'
import {
  TEsterilizacaoInternaDtoFields,
  TEsterilizacaoInternaDtoKeys,
} from '@/data/oftalmo/esterilizacao-interna/esterilizacao-interna.type.js'
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

export function esterilizacaoInternaDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, esterilizacaoInternaSchema)

  const list: TList<TEsterilizacaoInternaDtoFields> = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, esterilizacaoInternaMapFields)
    )
    return response.map((record) => esterilizacaoInternaToDto(record))
  }

  const read: TRead<
    TEsterilizacaoInternaDtoFields,
    TEsterilizacaoInternaDtoKeys
  > = async (args) => {
    const response = await orm.rpc.read(
      argsFromDto(args, esterilizacaoInternaMapFields)
    )
    return esterilizacaoInternaToDto(response)
  }

  const count: TCount<TEsterilizacaoInternaDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, esterilizacaoInternaMapFields))
  }

  const update: TUpdate<TEsterilizacaoInternaDtoFields> = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, esterilizacaoInternaMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      esterilizacaoInternaToDto(record as TData<TEsterilizacaoInternaDtoFields>)
    )
  }

  const del: TDel<TEsterilizacaoInternaDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, esterilizacaoInternaMapFields))
  }

  const increment: TIncrement<TEsterilizacaoInternaDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, esterilizacaoInternaMapFields))
  }

  const create: TCreate<TEsterilizacaoInternaDtoFields> = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, esterilizacaoInternaMapFields)
    )
    return response.map((record) =>
      esterilizacaoInternaToDto(record as TData<TEsterilizacaoInternaDtoFields>)
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
