import type { TSchema } from '@/schemas/schema.type.js'
import { getFields } from '@/utils/orm/utils/schema/get-fields.js'
import { getPrimary } from '@/utils/orm/utils/schema/get-primary.js'
import { getTable } from '@/utils/orm/utils/schema/get-table.js'

export function validId<T>(id: any[][], schema: TSchema) {
  const idColumns = getPrimary(schema)
  const fieldColumns = getFields(schema)
  const fieldsInvalidos: string[] = []
  let fieldsLivres = [...idColumns].sort()

  // schema sem primary
  if (idColumns.length === 0)
    throw new Error(`${schema.table} não possui primary keys`)
  // id formato incorreto
  if (!Array.isArray(id)) throw new Error('where deve ser Array<[string, any]>')

  for (const fields of id) {
    // field deve ser array
    if (!Array.isArray(fields))
      throw new Error('where deve ser Array<[string, any]>')

    // field deve ser [string, any]
    const [field] = fields
    if (typeof field !== 'string' || fields.length !== 2)
      throw new Error('where deve ser Array<[string, any]>')

    // field não é id
    if (!idColumns.includes(field) && !fieldColumns.includes(field)) {
      fieldsInvalidos.push(field)
    }
    fieldsLivres = fieldsLivres.filter((fld) => fld !== field)
  }

  if (fieldsInvalidos.length > 0) {
    throw new Error(
      `[${fieldsInvalidos}] não ${
        fieldsInvalidos.length === 1 ? 'é id válido' : 'são ids válidos'
      }${
        fieldsLivres.length > 0 ? ` em ${getTable(schema)} use: ` : ''
      }${fieldsLivres}`
    )
  }

  if (fieldsLivres.length > 0) {
    throw new Error(
      `[${fieldsLivres}] não ${
        fieldsLivres.length === 1 ? 'foi usado' : 'foram usados'
      } em ${getTable(schema)} use: ${fieldsLivres}`
    )
  }
  return { where: id }
}
