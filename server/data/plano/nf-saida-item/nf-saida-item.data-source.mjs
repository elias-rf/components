import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'
import { nfSaidaItemMapFields } from './nf-saida-item.map-fields.mjs'
import { nfSaidaItemSchema } from './nf-saida-item.schema.mjs'
import { nfSaidaItemToDto } from './nf-saida-item.to-dto.mjs'

export function nfSaidaItemDataSource(ds) {
  const orm = ormTableDataSource(ds, nfSaidaItemSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, nfSaidaItemMapFields))
    return response.map((record) => nfSaidaItemToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(argsFromDto(args, nfSaidaItemMapFields))
    return nfSaidaItemToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, nfSaidaItemMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, nfSaidaItemMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => nfSaidaItemToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, nfSaidaItemMapFields))
  }

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, nfSaidaItemMapFields))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, nfSaidaItemMapFields)
    )

    return response.map((record) => nfSaidaItemToDto(record))
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
