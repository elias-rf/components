import { etiquetaInternaMapFields } from '../../../data/oftalmo/etiqueta-interna/etiqueta-interna.map-fields.mjs'
import { etiquetaInternaSchema } from '../../../data/oftalmo/etiqueta-interna/etiqueta-interna.schema.mjs'
import { etiquetaInternaToDto } from '../../../data/oftalmo/etiqueta-interna/etiqueta-interna.to-dto.mjs'
import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'

export function etiquetaInternaDataSource(ds) {
  const orm = ormTableDataSource(ds, etiquetaInternaSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, etiquetaInternaMapFields)
    )
    return response.map((record) => etiquetaInternaToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(
      argsFromDto(args, etiquetaInternaMapFields)
    )
    return etiquetaInternaToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, etiquetaInternaMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, etiquetaInternaMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => etiquetaInternaToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, etiquetaInternaMapFields))
  }

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, etiquetaInternaMapFields))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, etiquetaInternaMapFields)
    )
    return response.map((record) => etiquetaInternaToDto(record))
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
