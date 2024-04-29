import { nfEntradaControleMapFields } from '../../../data/plano/nf-entrada-controle/nf-entrada-controle.map-fields.mjs'
import { nfEntradaControleSchema } from '../../../data/plano/nf-entrada-controle/nf-entrada-controle.schema.mjs'
import { nfEntradaControleToDto } from '../../../data/plano/nf-entrada-controle/nf-entrada-controle.to-dto.mjs'
import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'

export function nfEntradaControleDataSource(ds) {
  const orm = ormTableDataSource(ds, nfEntradaControleSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, nfEntradaControleMapFields)
    )
    return response.map((record) => nfEntradaControleToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(
      argsFromDto(args, nfEntradaControleMapFields)
    )
    return nfEntradaControleToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, nfEntradaControleMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, nfEntradaControleMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => nfEntradaControleToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, nfEntradaControleMapFields))
  }

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, nfEntradaControleMapFields))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, nfEntradaControleMapFields)
    )

    return response.map((record) => nfEntradaControleToDto(record))
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
