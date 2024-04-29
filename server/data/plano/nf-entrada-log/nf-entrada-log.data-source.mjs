import { nfEntradaLogMapFields } from '../../../data/plano/nf-entrada-log/nf-entrada-log.map-fields.mjs'
import { nfEntradaLogSchema } from '../../../data/plano/nf-entrada-log/nf-entrada-log.schema.mjs'
import { nfEntradaLogToDto } from '../../../data/plano/nf-entrada-log/nf-entrada-log.to-dto.mjs'
import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'

export function nfEntradaLogDataSource(ds) {
  const orm = ormTableDataSource(ds, nfEntradaLogSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, nfEntradaLogMapFields)
    )
    return response.map((record) => nfEntradaLogToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(
      argsFromDto(args, nfEntradaLogMapFields)
    )
    return nfEntradaLogToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, nfEntradaLogMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, nfEntradaLogMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => nfEntradaLogToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, nfEntradaLogMapFields))
  }

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, nfEntradaLogMapFields))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, nfEntradaLogMapFields)
    )

    return response.map((record) => nfEntradaLogToDto(record))
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
