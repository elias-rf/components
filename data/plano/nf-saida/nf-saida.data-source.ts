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
import { nfSaidaMapFields } from './nf-saida.map-fields.js'
import { nfSaidaSchema } from './nf-saida.schema.js'
import { nfSaidaToDto } from './nf-saida.to-dto.js'
import { TNfSaidaDtoFields, TNfSaidaDtoKeys } from './nf-saida.type.js'

export type TNfSaidaSchema = {
  CdNfSaida: number
  RzSocial: string
  CdCidade: string
  CdPais: string
  CdVendedor: string
  CGC: string
  Cidade: string
}

export function nfSaidaDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, nfSaidaSchema)

  const list: TList<TNfSaidaDtoFields> = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, nfSaidaMapFields))
    return response.map((record) => nfSaidaToDto(record))
  }

  const read: TRead<TNfSaidaDtoFields, TNfSaidaDtoKeys> = async (args) => {
    const response = await orm.rpc.read(argsFromDto(args, nfSaidaMapFields))
    return nfSaidaToDto(response)
  }

  const count: TCount<TNfSaidaDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, nfSaidaMapFields))
  }

  const update: TUpdate<TNfSaidaDtoFields> = async (args) => {
    const response = await orm.rpc.update(argsFromDto(args, nfSaidaMapFields))

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      nfSaidaToDto(record as TData<TNfSaidaDtoFields>)
    )
  }

  const del: TDel<TNfSaidaDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, nfSaidaMapFields))
  }

  const increment: TIncrement<TNfSaidaDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, nfSaidaMapFields))
  }

  const create: TCreate<TNfSaidaDtoFields> = async (args) => {
    const response = await orm.rpc.create(argsFromDto(args, nfSaidaMapFields))

    return response.map((record) =>
      nfSaidaToDto(record as TData<TNfSaidaDtoFields>)
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
