import { operacaoProducaoMapFields } from '@/data/oftalmo/operacao-producao/operacao-producao.map-fields.js'
import { operacaoProducaoSchema } from '@/data/oftalmo/operacao-producao/operacao-producao.schema.js'
import { operacaoProducaoToDto } from '@/data/oftalmo/operacao-producao/operacao-producao.to-dto.js'
import {
  TOperacaoProducaoDtoFields,
  TOperacaoProducaoDtoKeys,
} from '@/data/oftalmo/operacao-producao/operacao-producao.type.js'
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

export function operacaoProducaoDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, operacaoProducaoSchema)

  const list: TList<TOperacaoProducaoDtoFields> = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, operacaoProducaoMapFields)
    )
    return response.map((record) => operacaoProducaoToDto(record))
  }

  const read: TRead<
    TOperacaoProducaoDtoFields,
    TOperacaoProducaoDtoKeys
  > = async (args) => {
    const response = await orm.rpc.read(
      argsFromDto(args, operacaoProducaoMapFields)
    )
    return operacaoProducaoToDto(response)
  }

  const count: TCount<TOperacaoProducaoDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, operacaoProducaoMapFields))
  }

  const update: TUpdate<TOperacaoProducaoDtoFields> = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, operacaoProducaoMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      operacaoProducaoToDto(record as TData<TOperacaoProducaoDtoFields>)
    )
  }

  const del: TDel<TOperacaoProducaoDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, operacaoProducaoMapFields))
  }

  const increment: TIncrement<TOperacaoProducaoDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, operacaoProducaoMapFields))
  }

  const create: TCreate<TOperacaoProducaoDtoFields> = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, operacaoProducaoMapFields)
    )
    return response.map((record) =>
      operacaoProducaoToDto(record as TData<TOperacaoProducaoDtoFields>)
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
