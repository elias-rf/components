import { TSchema } from '@/schemas/schema.type'
import { getIdFields } from '@/orm/utils/get-id-fields'
import { getFieldType } from '@/orm/utils/get-field-type'
import { getType } from '@/utils/identify/get-type'
import { getTableName } from '@/orm/utils/get-table-name'

export function validId<T>(id: Array<[T, any]>, schema: TSchema) {
  const idColumns = getIdFields(schema)
  const fieldsInvalidos: string[] = []
  let fieldsLivres = [...idColumns].sort()

  // schema sem primary
  if (idColumns.length === 0)
    throw new Error(`${schema.table} não possui primary keys`)
  // id formato incorreto
  if (!Array.isArray(id)) throw new Error('id deve ser Array<[string, any]>')

  for (const fields of id) {
    // field deve ser array
    if (!Array.isArray(fields))
      throw new Error('id deve ser Array<[string, any]>')

    // field deve ser [string, any]
    const [field, value] = fields
    if (typeof field !== 'string' || fields.length !== 2)
      throw new Error('id deve ser Array<[string, any]>')

    // field não é id
    if (!idColumns.includes(field)) {
      fieldsInvalidos.push(field)
    } else {
      // field deve ser do tipo correto
      if (getType(value) !== getFieldType(field, schema)) {
        throw new Error(
          `${getTableName(schema)}.${field} deve ser do tipo ${getFieldType(
            field,
            schema
          )} mas é ${getType(value)}`
        )
      }
    }
    fieldsLivres = fieldsLivres.filter((fld) => fld !== field)
  }

  if (fieldsInvalidos.length > 0) {
    throw new Error(
      `[${fieldsInvalidos}] não ${
        fieldsInvalidos.length === 1 ? 'é id válido' : 'são ids válidos'
      }${
        fieldsLivres.length > 0 ? ` em ${getTableName(schema)} use: ` : ''
      }${fieldsLivres}`
    )
  }

  if (fieldsLivres.length > 0) {
    throw new Error(
      `[${fieldsLivres}] não ${
        fieldsLivres.length === 1 ? 'foi usado' : 'foram usados'
      } em ${getTableName(schema)} use: ${fieldsLivres}`
    )
  }
  return { where: id }
}
