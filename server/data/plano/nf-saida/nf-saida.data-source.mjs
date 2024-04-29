import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'
import { nfSaidaMapFields } from './nf-saida.map-fields.mjs'
import { nfSaidaSchema } from './nf-saida.schema.mjs'
import { nfSaidaToDto } from './nf-saida.to-dto.mjs'

export function nfSaidaDataSource(ds) {
  const orm = ormTableDataSource(ds, nfSaidaSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, nfSaidaMapFields))
    return response.map((record) => nfSaidaToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(argsFromDto(args, nfSaidaMapFields))
    return nfSaidaToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, nfSaidaMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(argsFromDto(args, nfSaidaMapFields))

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => nfSaidaToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, nfSaidaMapFields))
  }

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, nfSaidaMapFields))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(argsFromDto(args, nfSaidaMapFields))

    return response.map((record) => nfSaidaToDto(record))
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
