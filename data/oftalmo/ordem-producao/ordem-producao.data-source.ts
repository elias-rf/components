import { ordemProducaoMapFields } from '@/data/oftalmo/ordem-producao/ordem-producao.map-fields.js'
import { ordemProducaoSchema } from '@/data/oftalmo/ordem-producao/ordem-producao.schema.js'
import { ordemProducaoToDto } from '@/data/oftalmo/ordem-producao/ordem-producao.to-dto.js'
import {
  TOrdemProducaoDtoFields,
  TOrdemProducaoDtoKeys,
} from '@/data/oftalmo/ordem-producao/ordem-producao.type.js'
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

export function ordemProducaoDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, ordemProducaoSchema)

  const list: TList<TOrdemProducaoDtoFields> = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, ordemProducaoMapFields)
    )
    return response.map((record) => ordemProducaoToDto(record))
  }

  const read: TRead<TOrdemProducaoDtoFields, TOrdemProducaoDtoKeys> = async (
    args
  ) => {
    const response = await orm.rpc.read(
      argsFromDto(args, ordemProducaoMapFields)
    )
    return ordemProducaoToDto(response)
  }

  const count: TCount<TOrdemProducaoDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, ordemProducaoMapFields))
  }

  const update: TUpdate<TOrdemProducaoDtoFields> = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, ordemProducaoMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      ordemProducaoToDto(record as TData<TOrdemProducaoDtoFields>)
    )
  }

  const del: TDel<TOrdemProducaoDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, ordemProducaoMapFields))
  }

  const increment: TIncrement<TOrdemProducaoDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, ordemProducaoMapFields))
  }

  const create: TCreate<TOrdemProducaoDtoFields> = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, ordemProducaoMapFields)
    )
    return response.map((record) =>
      ordemProducaoToDto(record as TData<TOrdemProducaoDtoFields>)
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
