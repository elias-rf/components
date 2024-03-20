import { ordemProducaoOperacaoMapFields } from '@/data/oftalmo/ordem-producao-operacao/ordem-producao-operacao.map-fields.js'
import { ordemProducaoOperacaoSchema } from '@/data/oftalmo/ordem-producao-operacao/ordem-producao-operacao.schema.js'
import { ordemProducaoOperacaoToDto } from '@/data/oftalmo/ordem-producao-operacao/ordem-producao-operacao.to-dto.js'
import {
  TOrdemProducaoOperacaoDtoFields,
  TOrdemProducaoOperacaoDtoKeys,
} from '@/data/oftalmo/ordem-producao-operacao/ordem-producao-operacao.type.js'
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

export function ordemProducaoOperacaoDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, ordemProducaoOperacaoSchema)

  const list: TList<TOrdemProducaoOperacaoDtoFields> = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, ordemProducaoOperacaoMapFields)
    )
    return response.map((record) => ordemProducaoOperacaoToDto(record))
  }

  const read: TRead<
    TOrdemProducaoOperacaoDtoFields,
    TOrdemProducaoOperacaoDtoKeys
  > = async (args) => {
    const response = await orm.rpc.read(
      argsFromDto(args, ordemProducaoOperacaoMapFields)
    )
    return ordemProducaoOperacaoToDto(response)
  }

  const count: TCount<TOrdemProducaoOperacaoDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, ordemProducaoOperacaoMapFields))
  }

  const update: TUpdate<TOrdemProducaoOperacaoDtoFields> = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, ordemProducaoOperacaoMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      ordemProducaoOperacaoToDto(
        record as TData<TOrdemProducaoOperacaoDtoFields>
      )
    )
  }

  const del: TDel<TOrdemProducaoOperacaoDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, ordemProducaoOperacaoMapFields))
  }

  const increment: TIncrement<TOrdemProducaoOperacaoDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, ordemProducaoOperacaoMapFields))
  }

  const create: TCreate<TOrdemProducaoOperacaoDtoFields> = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, ordemProducaoOperacaoMapFields)
    )
    return response.map((record) =>
      ordemProducaoOperacaoToDto(
        record as TData<TOrdemProducaoOperacaoDtoFields>
      )
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
