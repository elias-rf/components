import { fornecedorMapFields } from '../../../data/plano/fornecedor/fornecedor.map-fields.mjs'
import { fornecedorSchema } from '../../../data/plano/fornecedor/fornecedor.schema.mjs'
import { fornecedorToDto } from '../../../data/plano/fornecedor/fornecedor.to-dto.mjs'
import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'

export function fornecedorDataSource(ds) {
  const orm = ormTableDataSource(ds, fornecedorSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, fornecedorMapFields))
    return response.map((record) => fornecedorToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(argsFromDto(args, fornecedorMapFields))
    return fornecedorToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, fornecedorMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, fornecedorMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => fornecedorToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, fornecedorMapFields))
  }

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, fornecedorMapFields))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, fornecedorMapFields)
    )

    return response.map((record) => fornecedorToDto(record))
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
