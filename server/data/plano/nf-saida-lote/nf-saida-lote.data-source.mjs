import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'
import { nfSaidaLoteMapFields } from './nf-saida-lote.map-fields.mjs'
import { nfSaidaLoteSchema } from './nf-saida-lote.schema.mjs'
import { nfSaidaLoteToDto } from './nf-saida-lote.to-dto.mjs'

export function nfSaidaLoteDataSource(ds) {
  const orm = ormTableDataSource(ds, nfSaidaLoteSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, nfSaidaLoteMapFields))
    return response.map((record) => nfSaidaLoteToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(argsFromDto(args, nfSaidaLoteMapFields))
    return nfSaidaLoteToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, nfSaidaLoteMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, nfSaidaLoteMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => nfSaidaLoteToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, nfSaidaLoteMapFields))
  }

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, nfSaidaLoteMapFields))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, nfSaidaLoteMapFields)
    )

    return response.map((record) => nfSaidaLoteToDto(record))
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
