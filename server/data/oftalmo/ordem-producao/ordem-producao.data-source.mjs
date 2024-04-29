import { ordemProducaoMapFields } from '../../../data/oftalmo/ordem-producao/ordem-producao.map-fields.mjs'
import { ordemProducaoSchema } from '../../../data/oftalmo/ordem-producao/ordem-producao.schema.mjs'
import { ordemProducaoToDto } from '../../../data/oftalmo/ordem-producao/ordem-producao.to-dto.mjs'
import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'

export function ordemProducaoDataSource(ds) {
  const orm = ormTableDataSource(ds, ordemProducaoSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, ordemProducaoMapFields)
    )
    return response.map((record) => ordemProducaoToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(
      argsFromDto(args, ordemProducaoMapFields)
    )
    return ordemProducaoToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, ordemProducaoMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, ordemProducaoMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => ordemProducaoToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, ordemProducaoMapFields))
  }

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, ordemProducaoMapFields))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, ordemProducaoMapFields)
    )
    return response.map((record) => ordemProducaoToDto(record))
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
