import { estoqueMapFields } from '../../../data/plano/estoque/estoque.map-fields.mjs'
import { estoqueSchema } from '../../../data/plano/estoque/estoque.schema.mjs'
import { estoqueToDto } from '../../../data/plano/estoque/estoque.to-dto.mjs'
import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'

export function estoqueDataSource(ds) {
  const orm = ormTableDataSource(ds, estoqueSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, estoqueMapFields))
    return response.map((record) => estoqueToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(argsFromDto(args, estoqueMapFields))
    return estoqueToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, estoqueMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(argsFromDto(args, estoqueMapFields))

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => estoqueToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, estoqueMapFields))
  }

  const increment = async (args) => {
    const response = await orm.rpc.increment(
      argsFromDto(args, estoqueMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => estoqueToDto(record))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(argsFromDto(args, estoqueMapFields))

    return response.map((record) => estoqueToDto(record))
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
