import { esterilizacaoInternaMapFields } from '../../../data/oftalmo/esterilizacao-interna/esterilizacao-interna.map-fields.mjs'
import { esterilizacaoInternaSchema } from '../../../data/oftalmo/esterilizacao-interna/esterilizacao-interna.schema.mjs'
import { esterilizacaoInternaToDto } from '../../../data/oftalmo/esterilizacao-interna/esterilizacao-interna.to-dto.mjs'
import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'

export function esterilizacaoInternaDataSource(ds) {
  const orm = ormTableDataSource(ds, esterilizacaoInternaSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, esterilizacaoInternaMapFields)
    )
    return response.map((record) => esterilizacaoInternaToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(
      argsFromDto(args, esterilizacaoInternaMapFields)
    )
    return esterilizacaoInternaToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, esterilizacaoInternaMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, esterilizacaoInternaMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => esterilizacaoInternaToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, esterilizacaoInternaMapFields))
  }

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, esterilizacaoInternaMapFields))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, esterilizacaoInternaMapFields)
    )
    return response.map((record) => esterilizacaoInternaToDto(record))
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
