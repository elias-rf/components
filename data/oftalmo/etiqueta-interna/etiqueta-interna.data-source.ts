import { etiquetaInternaMapFields } from '@/data/oftalmo/etiqueta-interna/etiqueta-interna.map-fields.js'
import { etiquetaInternaSchema } from '@/data/oftalmo/etiqueta-interna/etiqueta-interna.schema.js'
import { etiquetaInternaToDto } from '@/data/oftalmo/etiqueta-interna/etiqueta-interna.to-dto.js'
import {
  TEtiquetaInternaDtoFields,
  TEtiquetaInternaDtoKeys,
} from '@/data/oftalmo/etiqueta-interna/etiqueta-interna.type.js'
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

export function etiquetaInternaDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, etiquetaInternaSchema)

  const list: TList<TEtiquetaInternaDtoFields> = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, etiquetaInternaMapFields)
    )
    return response.map((record) => etiquetaInternaToDto(record))
  }

  const read: TRead<
    TEtiquetaInternaDtoFields,
    TEtiquetaInternaDtoKeys
  > = async (args) => {
    const response = await orm.rpc.read(
      argsFromDto(args, etiquetaInternaMapFields)
    )
    return etiquetaInternaToDto(response)
  }

  const count: TCount<TEtiquetaInternaDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, etiquetaInternaMapFields))
  }

  const update: TUpdate<TEtiquetaInternaDtoFields> = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, etiquetaInternaMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      etiquetaInternaToDto(record as TData<TEtiquetaInternaDtoFields>)
    )
  }

  const del: TDel<TEtiquetaInternaDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, etiquetaInternaMapFields))
  }

  const increment: TIncrement<TEtiquetaInternaDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, etiquetaInternaMapFields))
  }

  const create: TCreate<TEtiquetaInternaDtoFields> = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, etiquetaInternaMapFields)
    )
    return response.map((record) =>
      etiquetaInternaToDto(record as TData<TEtiquetaInternaDtoFields>)
    )
  }

  return {
    orm,
    count,
    create,
    del,
    increment,
    list,
    read,
    update,
  }
}
