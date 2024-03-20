import { nfEntradaControleMapFields } from '@/data/plano/nf-entrada-controle/nf-entrada-controle.map-fields.js'
import { nfEntradaControleSchema } from '@/data/plano/nf-entrada-controle/nf-entrada-controle.schema.js'
import { nfEntradaControleToDto } from '@/data/plano/nf-entrada-controle/nf-entrada-controle.to-dto.js'
import {
  TNfEntradaControleDtoFields,
  TNfEntradaControleDtoKeys,
} from '@/data/plano/nf-entrada-controle/nf-entrada-controle.type.js'
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

export function nfEntradaControleDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, nfEntradaControleSchema)

  const list: TList<TNfEntradaControleDtoFields> = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, nfEntradaControleMapFields)
    )
    return response.map((record) => nfEntradaControleToDto(record))
  }

  const read: TRead<
    TNfEntradaControleDtoFields,
    TNfEntradaControleDtoKeys
  > = async (args) => {
    const response = await orm.rpc.read(
      argsFromDto(args, nfEntradaControleMapFields)
    )
    return nfEntradaControleToDto(response)
  }

  const count: TCount<TNfEntradaControleDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, nfEntradaControleMapFields))
  }

  const update: TUpdate<TNfEntradaControleDtoFields> = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, nfEntradaControleMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      nfEntradaControleToDto(record as TData<TNfEntradaControleDtoFields>)
    )
  }

  const del: TDel<TNfEntradaControleDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, nfEntradaControleMapFields))
  }

  const increment: TIncrement<TNfEntradaControleDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, nfEntradaControleMapFields))
  }

  const create: TCreate<TNfEntradaControleDtoFields> = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, nfEntradaControleMapFields)
    )

    return response.map((record) =>
      nfEntradaControleToDto(record as TData<TNfEntradaControleDtoFields>)
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
