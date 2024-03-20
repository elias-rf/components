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
import { nfSaidaItemMapFields } from './nf-saida-item.map-fields.js'
import { nfSaidaItemSchema } from './nf-saida-item.schema.js'
import { nfSaidaItemToDto } from './nf-saida-item.to-dto.js'
import {
  TNfSaidaItemDtoFields,
  TNfSaidaItemDtoKeys,
} from './nf-saida-item.type.js'

export type TNfSaidaItemSchema = {
  CdNfSaida: number
  RzSocial: string
  CdCidade: string
  CdPais: string
  CdVendedor: string
  CGC: string
  Cidade: string
}

export function nfSaidaItemDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, nfSaidaItemSchema)

  const list: TList<TNfSaidaItemDtoFields> = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, nfSaidaItemMapFields))
    return response.map((record) => nfSaidaItemToDto(record))
  }

  const read: TRead<TNfSaidaItemDtoFields, TNfSaidaItemDtoKeys> = async (
    args
  ) => {
    const response = await orm.rpc.read(argsFromDto(args, nfSaidaItemMapFields))
    return nfSaidaItemToDto(response)
  }

  const count: TCount<TNfSaidaItemDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, nfSaidaItemMapFields))
  }

  const update: TUpdate<TNfSaidaItemDtoFields> = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, nfSaidaItemMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      nfSaidaItemToDto(record as TData<TNfSaidaItemDtoFields>)
    )
  }

  const del: TDel<TNfSaidaItemDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, nfSaidaItemMapFields))
  }

  const increment: TIncrement<TNfSaidaItemDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, nfSaidaItemMapFields))
  }

  const create: TCreate<TNfSaidaItemDtoFields> = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, nfSaidaItemMapFields)
    )

    return response.map((record) =>
      nfSaidaItemToDto(record as TData<TNfSaidaItemDtoFields>)
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
