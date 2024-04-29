import { produtoControleMapFields } from '../../../data/plano/produto-controle/produto-controle.map-fields.mjs'
import { produtoControleSchema } from '../../../data/plano/produto-controle/produto-controle.schema.mjs'
import { produtoControleToDto } from '../../../data/plano/produto-controle/produto-controle.to-dto.mjs'
import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'

export function produtoControleDataSource(ds) {
  const orm = ormTableDataSource(ds, produtoControleSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, produtoControleMapFields)
    )
    return response.map((record) => produtoControleToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(
      argsFromDto(args, produtoControleMapFields)
    )
    return produtoControleToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, produtoControleMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, produtoControleMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => produtoControleToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, produtoControleMapFields))
  }

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, produtoControleMapFields))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, produtoControleMapFields)
    )

    return response.map((record) => produtoControleToDto(record))
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
