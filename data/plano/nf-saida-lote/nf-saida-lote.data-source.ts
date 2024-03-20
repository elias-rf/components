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
import { nfSaidaLoteMapFields } from './nf-saida-lote.map-fields.js'
import { nfSaidaLoteSchema } from './nf-saida-lote.schema.js'
import { nfSaidaLoteToDto } from './nf-saida-lote.to-dto.js'
import {
  TNfSaidaLoteDtoFields,
  TNfSaidaLoteDtoKeys,
} from './nf-saida-lote.type.js'

export type TNfSaidaLoteSchema = {
  CdNfSaida: number
  RzSocial: string
  CdCidade: string
  CdPais: string
  CdVendedor: string
  CGC: string
  Cidade: string
}

export function nfSaidaLoteDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, nfSaidaLoteSchema)

  const list: TList<TNfSaidaLoteDtoFields> = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, nfSaidaLoteMapFields))
    return response.map((record) => nfSaidaLoteToDto(record))
  }

  const read: TRead<TNfSaidaLoteDtoFields, TNfSaidaLoteDtoKeys> = async (
    args
  ) => {
    const response = await orm.rpc.read(argsFromDto(args, nfSaidaLoteMapFields))
    return nfSaidaLoteToDto(response)
  }

  const count: TCount<TNfSaidaLoteDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, nfSaidaLoteMapFields))
  }

  const update: TUpdate<TNfSaidaLoteDtoFields> = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, nfSaidaLoteMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      nfSaidaLoteToDto(record as TData<TNfSaidaLoteDtoFields>)
    )
  }

  const del: TDel<TNfSaidaLoteDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, nfSaidaLoteMapFields))
  }

  const increment: TIncrement<TNfSaidaLoteDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, nfSaidaLoteMapFields))
  }

  const create: TCreate<TNfSaidaLoteDtoFields> = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, nfSaidaLoteMapFields)
    )

    return response.map((record) =>
      nfSaidaLoteToDto(record as TData<TNfSaidaLoteDtoFields>)
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
