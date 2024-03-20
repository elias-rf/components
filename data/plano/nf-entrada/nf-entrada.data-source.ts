import { nfEntradaMapFields } from '@/data/plano/nf-entrada/nf-entrada.map-fields.js'
import { nfEntradaSchema } from '@/data/plano/nf-entrada/nf-entrada.schema.js'
import { nfEntradaToDto } from '@/data/plano/nf-entrada/nf-entrada.to-dto.js'
import {
  TNfEntradaDtoFields,
  TNfEntradaDtoKeys,
} from '@/data/plano/nf-entrada/nf-entrada.type.js'
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

export type TNfEntradaSchema = {
  CdNfEntrada: number
  RzSocial: string
  CdCidade: string
  CdPais: string
  CdVendedor: string
  CGC: string
  Cidade: string
}

export function nfEntradaDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, nfEntradaSchema)

  const list: TList<TNfEntradaDtoFields> = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, nfEntradaMapFields))
    return response.map((record) => nfEntradaToDto(record))
  }

  const read: TRead<TNfEntradaDtoFields, TNfEntradaDtoKeys> = async (args) => {
    const response = await orm.rpc.read(argsFromDto(args, nfEntradaMapFields))
    return nfEntradaToDto(response)
  }

  const count: TCount<TNfEntradaDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, nfEntradaMapFields))
  }

  const update: TUpdate<TNfEntradaDtoFields> = async (args) => {
    const response = await orm.rpc.update(argsFromDto(args, nfEntradaMapFields))

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      nfEntradaToDto(record as TData<TNfEntradaDtoFields>)
    )
  }

  const del: TDel<TNfEntradaDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, nfEntradaMapFields))
  }

  const increment: TIncrement<TNfEntradaDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, nfEntradaMapFields))
  }

  const create: TCreate<TNfEntradaDtoFields> = async (args) => {
    const response = await orm.rpc.create(argsFromDto(args, nfEntradaMapFields))

    return response.map((record) =>
      nfEntradaToDto(record as TData<TNfEntradaDtoFields>)
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
