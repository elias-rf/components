import { etiquetaExternaMapFields } from '../../../data/oftalmo/etiqueta-externa/etiqueta-externa.map-fields.mjs'
import { etiquetaExternaSchema } from '../../../data/oftalmo/etiqueta-externa/etiqueta-externa.schema.mjs'
import { etiquetaExternaToDto } from '../../../data/oftalmo/etiqueta-externa/etiqueta-externa.to-dto.mjs'
import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'

export function etiquetaExternaDataSource(ds) {
  const orm = ormTableDataSource(ds, etiquetaExternaSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, etiquetaExternaMapFields)
    )
    return response.map((record) => etiquetaExternaToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(
      argsFromDto(args, etiquetaExternaMapFields)
    )
    return etiquetaExternaToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, etiquetaExternaMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, etiquetaExternaMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => etiquetaExternaToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, etiquetaExternaMapFields))
  }

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, etiquetaExternaMapFields))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, etiquetaExternaMapFields)
    )
    return response.map((record) => etiquetaExternaToDto(record))
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
