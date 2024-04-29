import { agendaTelefoneMapFields } from '../../../data/oftalmo/agenda-telefone/agenda-telefone.map-fields.mjs'
import { agendaTelefoneSchema } from '../../../data/oftalmo/agenda-telefone/agenda-telefone.schema.mjs'
import { agendaTelefoneToDto } from '../../../data/oftalmo/agenda-telefone/agenda-telefone.to-dto.mjs'
import { ormTableDataSource } from '../../../utils/orm/orm-data-source/index.mjs'
import { argsFromDto } from '../../../utils/orm/utils/args-from-dto.mjs'

export function agendaTelefoneDataSource(ds) {
  const orm = ormTableDataSource(ds, agendaTelefoneSchema)

  const list = async (args) => {
    const response = await orm.rpc.list(
      argsFromDto(args, agendaTelefoneMapFields)
    )
    return response.map((record) => agendaTelefoneToDto(record))
  }

  const read = async (args) => {
    const response = await orm.rpc.read(
      argsFromDto(args, agendaTelefoneMapFields)
    )
    return agendaTelefoneToDto(response)
  }

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, agendaTelefoneMapFields))
  }

  const update = async (args) => {
    const response = await orm.rpc.update(
      argsFromDto(args, agendaTelefoneMapFields)
    )

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) => agendaTelefoneToDto(record))
  }

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, agendaTelefoneMapFields))
  }

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, agendaTelefoneMapFields))
  }

  const create = async (args) => {
    const response = await orm.rpc.create(
      argsFromDto(args, agendaTelefoneMapFields)
    )
    return response.map((record) => agendaTelefoneToDto(record))
  }

  return {
    orm,
    count,
    create,
    del,
    increment,
    list,
    read,
    update,
  }
}
