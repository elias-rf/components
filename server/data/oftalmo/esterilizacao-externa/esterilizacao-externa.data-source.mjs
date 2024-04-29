import { esterilizacaoExternaMapFields } from '../../../data/oftalmo/esterilizacao-externa/esterilizacao-externa.map-fields.mjs'
import { esterilizacaoExternaSchema } from '../../../data/oftalmo/esterilizacao-externa/esterilizacao-externa.schema.mjs'
import { esterilizacaoExternaToDto } from '../../../data/oftalmo/esterilizacao-externa/esterilizacao-externa.to-dto.mjs'
import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'

export function esterilizacaoExternaDataSource(ds) {
  const orm = ormTableDataSource(ds, esterilizacaoExternaSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, esterilizacaoExternaMapFields)
    )
    return response.map((record) => esterilizacaoExternaToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(
      argsFromDto(args, esterilizacaoExternaMapFields)
    )
    return esterilizacaoExternaToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, esterilizacaoExternaMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, esterilizacaoExternaMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => esterilizacaoExternaToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, esterilizacaoExternaMapFields))
  }

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, esterilizacaoExternaMapFields))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, esterilizacaoExternaMapFields)
    )
    return response.map((record) => esterilizacaoExternaToDto(record))
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
