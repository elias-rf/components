import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'
import { produtoItemMapFields } from './produto-item.map-fields.mjs'
import { produtoItemSchema } from './produto-item.schema.mjs'
import { produtoItemToDto } from './produto-item.to-dto.mjs'

export function produtoItemDataSource(ds) {
  const orm = ormTableDataSource(ds, produtoItemSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, produtoItemMapFields))
    return response.map((record) => produtoItemToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(argsFromDto(args, produtoItemMapFields))
    return produtoItemToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, produtoItemMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, produtoItemMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => produtoItemToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, produtoItemMapFields))
  }

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, produtoItemMapFields))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, produtoItemMapFields)
    )

    return response.map((record) => produtoItemToDto(record))
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
