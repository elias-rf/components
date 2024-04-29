import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'
import { nfEntradaItemMapFields } from './nf-entrada-item.map-fields.mjs'
import { nfEntradaItemSchema } from './nf-entrada-item.schema.mjs'
import { nfEntradaItemToDto } from './nf-entrada-item.to-dto.mjs'

export function nfEntradaItemDataSource(ds) {
  const orm = ormTableDataSource(ds, nfEntradaItemSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, nfEntradaItemMapFields)
    )
    return response.map((record) => nfEntradaItemToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(
      argsFromDto(args, nfEntradaItemMapFields)
    )
    return nfEntradaItemToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, nfEntradaItemMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, nfEntradaItemMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => nfEntradaItemToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, nfEntradaItemMapFields))
  }

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, nfEntradaItemMapFields))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, nfEntradaItemMapFields)
    )

    return response.map((record) => nfEntradaItemToDto(record))
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
