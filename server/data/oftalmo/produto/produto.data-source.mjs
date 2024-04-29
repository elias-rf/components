import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'
import { produtoMapFields } from './produto.map-fields.mjs'
import { produtoSchema } from './produto.schema.mjs'
import { produtoToDto } from './produto.to-dto.mjs'

export function produtoDataSource(ds) {
  const orm = ormTableDataSource(ds, produtoSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, produtoMapFields))
    return response.map((record) => produtoToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(argsFromDto(args, produtoMapFields))
    return produtoToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, produtoMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(argsFromDto(args, produtoMapFields))

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => produtoToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, produtoMapFields))
  }

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, produtoMapFields))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(argsFromDto(args, produtoMapFields))

    return response.map((record) => produtoToDto(record))
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
