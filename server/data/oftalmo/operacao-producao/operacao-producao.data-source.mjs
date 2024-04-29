import { operacaoProducaoMapFields } from '../../../data/oftalmo/operacao-producao/operacao-producao.map-fields.mjs'
import { operacaoProducaoSchema } from '../../../data/oftalmo/operacao-producao/operacao-producao.schema.mjs'
import { operacaoProducaoToDto } from '../../../data/oftalmo/operacao-producao/operacao-producao.to-dto.mjs'
import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'

export function operacaoProducaoDataSource(ds) {
  const orm = ormTableDataSource(ds, operacaoProducaoSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, operacaoProducaoMapFields)
    )
    return response.map((record) => operacaoProducaoToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(
      argsFromDto(args, operacaoProducaoMapFields)
    )
    return operacaoProducaoToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, operacaoProducaoMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, operacaoProducaoMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => operacaoProducaoToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, operacaoProducaoMapFields))
  }

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, operacaoProducaoMapFields))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, operacaoProducaoMapFields)
    )
    return response.map((record) => operacaoProducaoToDto(record))
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
