import { receberMapFields } from '../../../data/plano/receber/receber.map-fields.mjs'
import { receberSchema } from '../../../data/plano/receber/receber.schema.mjs'
import { receberToDto } from '../../../data/plano/receber/receber.to-dto.mjs'
import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'

export function receberDataSource(ds) {
  const orm = ormTableDataSource(ds, receberSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, receberMapFields))
    return response.map((record) => receberToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(argsFromDto(args, receberMapFields))
    return receberToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, receberMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(argsFromDto(args, receberMapFields))

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => receberToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, receberMapFields))
  }

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, receberMapFields))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(argsFromDto(args, receberMapFields))

    return response.map((record) => receberToDto(record))
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
