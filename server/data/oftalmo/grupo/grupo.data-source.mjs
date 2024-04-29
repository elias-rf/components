import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'
import { grupoMapFields } from './grupo.map-fields.mjs'
import { grupoSchema } from './grupo.schema.mjs'
import { grupoToDto } from './grupo.to-dto.mjs'

export function grupoDataSource(ds) {
  const orm = ormTableDataSource(ds, grupoSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, grupoMapFields))
    return response.map((record) => grupoToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(argsFromDto(args, grupoMapFields))
    return grupoToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, grupoMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(argsFromDto(args, grupoMapFields))

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => grupoToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, grupoMapFields))
  }

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, grupoMapFields))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(argsFromDto(args, grupoMapFields))
    return response.map((record) => grupoToDto(record))
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
