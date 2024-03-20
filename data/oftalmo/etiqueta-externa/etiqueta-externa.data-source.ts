import { etiquetaExternaMapFields } from '@/data/oftalmo/etiqueta-externa/etiqueta-externa.map-fields.js'
import { etiquetaExternaSchema } from '@/data/oftalmo/etiqueta-externa/etiqueta-externa.schema.js'
import { etiquetaExternaToDto } from '@/data/oftalmo/etiqueta-externa/etiqueta-externa.to-dto.js'
import {
  TEtiquetaExternaDtoFields,
  TEtiquetaExternaDtoKeys,
} from '@/data/oftalmo/etiqueta-externa/etiqueta-externa.type.js'
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

export function etiquetaExternaDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, etiquetaExternaSchema)

  const list: TList<TEtiquetaExternaDtoFields> = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, etiquetaExternaMapFields)
    )
    return response.map((record) => etiquetaExternaToDto(record))
  }

  const read: TRead<
    TEtiquetaExternaDtoFields,
    TEtiquetaExternaDtoKeys
  > = async (args) => {
    const response = await orm.rpc.read(
      argsFromDto(args, etiquetaExternaMapFields)
    )
    return etiquetaExternaToDto(response)
  }

  const count: TCount<TEtiquetaExternaDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, etiquetaExternaMapFields))
  }

  const update: TUpdate<TEtiquetaExternaDtoFields> = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, etiquetaExternaMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      etiquetaExternaToDto(record as TData<TEtiquetaExternaDtoFields>)
    )
  }

  const del: TDel<TEtiquetaExternaDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, etiquetaExternaMapFields))
  }

  const increment: TIncrement<TEtiquetaExternaDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, etiquetaExternaMapFields))
  }

  const create: TCreate<TEtiquetaExternaDtoFields> = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, etiquetaExternaMapFields)
    )
    return response.map((record) =>
      etiquetaExternaToDto(record as TData<TEtiquetaExternaDtoFields>)
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
