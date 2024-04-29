import { ordemProducaoOperacaoMapFields } from '../../../data/oftalmo/ordem-producao-operacao/ordem-producao-operacao.map-fields.mjs'
import { ordemProducaoOperacaoSchema } from '../../../data/oftalmo/ordem-producao-operacao/ordem-producao-operacao.schema.mjs'
import { ordemProducaoOperacaoToDto } from '../../../data/oftalmo/ordem-producao-operacao/ordem-producao-operacao.to-dto.mjs'
import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'

export function ordemProducaoOperacaoDataSource(ds) {
  const orm = ormTableDataSource(ds, ordemProducaoOperacaoSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, ordemProducaoOperacaoMapFields)
    )
    return response.map((record) => ordemProducaoOperacaoToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(
      argsFromDto(args, ordemProducaoOperacaoMapFields)
    )
    return ordemProducaoOperacaoToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, ordemProducaoOperacaoMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, ordemProducaoOperacaoMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => ordemProducaoOperacaoToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, ordemProducaoOperacaoMapFields))
  }

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, ordemProducaoOperacaoMapFields))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, ordemProducaoOperacaoMapFields)
    )
    return response.map((record) => ordemProducaoOperacaoToDto(record))
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
