import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'
import { grupoSujeitoMapFields } from './grupo-sujeito.map-fields.mjs'
import { grupoSujeitoSchema } from './grupo-sujeito.schema.mjs'
import { groupToDto } from './grupo-sujeito.to-dto.mjs'

export function grupoSujeitoDataSource(ds) {
  const orm = ormTableDataSource(ds, grupoSujeitoSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, grupoSujeitoMapFields)
    )
    return response.map((record) => groupToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(
      argsFromDto(args, grupoSujeitoMapFields)
    )
    return groupToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, grupoSujeitoMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, grupoSujeitoMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => groupToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, grupoSujeitoMapFields))
  }

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, grupoSujeitoMapFields))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, grupoSujeitoMapFields)
    )
    return response.map((record) => groupToDto(record))
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
