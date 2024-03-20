import {
  TUsuarioDtoFields,
  TUsuarioDtoKeys,
} from '@/core/usuario/usuario.type.js'
import { usuarioMapFields } from '@/data/oftalmo/usuario/usuario.map-fields.js'
import { usuarioSchema } from '@/data/oftalmo/usuario/usuario.schema.js'
import { usuarioToDto } from '@/data/oftalmo/usuario/usuario.to-dto.js'
import { TUsuarioFields } from '@/data/oftalmo/usuario/usuario.type.js'
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

export function usuarioDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, usuarioSchema)

  const list: TList<TUsuarioDtoFields> = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, usuarioMapFields))
    return response.map((record) => usuarioToDto(record))
  }

  const read: TRead<TUsuarioDtoFields, TUsuarioDtoKeys> = async (args) => {
    const response = await orm.rpc.read(argsFromDto(args, usuarioMapFields))
    return usuarioToDto(response)
  }

  const count: TCount<TUsuarioDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, usuarioMapFields))
  }

  const update: TUpdate<TUsuarioDtoFields> = async (args) => {
    const response = await orm.rpc.update(argsFromDto(args, usuarioMapFields))

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      usuarioToDto(record as TData<TUsuarioFields>)
    )
  }

  const del: TDel<TUsuarioDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, usuarioMapFields))
  }

  const increment: TIncrement<TUsuarioDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, usuarioMapFields))
  }

  const create: TCreate<TUsuarioDtoFields> = async (args) => {
    const response = await orm.rpc.create(argsFromDto(args, usuarioMapFields))
    return response.map((record) =>
      usuarioToDto(record as TData<TUsuarioFields>)
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
