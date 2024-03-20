import { esterilizacaoExternaMapFields } from '@/data/oftalmo/esterilizacao-externa/esterilizacao-externa.map-fields.js'
import { esterilizacaoExternaSchema } from '@/data/oftalmo/esterilizacao-externa/esterilizacao-externa.schema.js'
import { esterilizacaoExternaToDto } from '@/data/oftalmo/esterilizacao-externa/esterilizacao-externa.to-dto.js'
import {
  TEsterilizacaoExternaDtoFields,
  TEsterilizacaoExternaDtoKeys,
} from '@/data/oftalmo/esterilizacao-externa/esterilizacao-externa.type.js'
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

export function esterilizacaoExternaDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, esterilizacaoExternaSchema)

  const list: TList<TEsterilizacaoExternaDtoFields> = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, esterilizacaoExternaMapFields)
    )
    return response.map((record) => esterilizacaoExternaToDto(record))
  }

  const read: TRead<
    TEsterilizacaoExternaDtoFields,
    TEsterilizacaoExternaDtoKeys
  > = async (args) => {
    const response = await orm.rpc.read(
      argsFromDto(args, esterilizacaoExternaMapFields)
    )
    return esterilizacaoExternaToDto(response)
  }

  const count: TCount<TEsterilizacaoExternaDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, esterilizacaoExternaMapFields))
  }

  const update: TUpdate<TEsterilizacaoExternaDtoFields> = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, esterilizacaoExternaMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      esterilizacaoExternaToDto(record as TData<TEsterilizacaoExternaDtoFields>)
    )
  }

  const del: TDel<TEsterilizacaoExternaDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, esterilizacaoExternaMapFields))
  }

  const increment: TIncrement<TEsterilizacaoExternaDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, esterilizacaoExternaMapFields))
  }

  const create: TCreate<TEsterilizacaoExternaDtoFields> = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, esterilizacaoExternaMapFields)
    )
    return response.map((record) =>
      esterilizacaoExternaToDto(record as TData<TEsterilizacaoExternaDtoFields>)
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
