import { clienteMapFields } from '../../../data/plano/cliente/cliente.map-fields.mjs'
import { clienteSchema } from '../../../data/plano/cliente/cliente.schema.mjs'
import { clienteToDto } from '../../../data/plano/cliente/cliente.to-dto.mjs'
import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'

export function clienteDataSource(ds) {
  const orm = ormTableDataSource(ds, clienteSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, clienteMapFields))
    return response.map((record) => clienteToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(argsFromDto(args, clienteMapFields))
    return clienteToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, clienteMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(argsFromDto(args, clienteMapFields))

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => clienteToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, clienteMapFields))
  }

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, clienteMapFields))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(argsFromDto(args, clienteMapFields))

    return response.map((record) => clienteToDto(record))
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
