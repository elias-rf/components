import { nfEntradaMapFields } from '../../../data/plano/nf-entrada/nf-entrada.map-fields.mjs'
import { nfEntradaSchema } from '../../../data/plano/nf-entrada/nf-entrada.schema.mjs'
import { nfEntradaToDto } from '../../../data/plano/nf-entrada/nf-entrada.to-dto.mjs'
import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'

export function nfEntradaDataSource(ds) {
  const orm = ormTableDataSource(ds, nfEntradaSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, nfEntradaMapFields))
    return response.map((record) => nfEntradaToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(argsFromDto(args, nfEntradaMapFields))
    return nfEntradaToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, nfEntradaMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(argsFromDto(args, nfEntradaMapFields))

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => nfEntradaToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, nfEntradaMapFields))
  }

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, nfEntradaMapFields))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(argsFromDto(args, nfEntradaMapFields))

    return response.map((record) => nfEntradaToDto(record))
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
