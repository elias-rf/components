import { getFields } from '@/orm/utils/get-fields'
import { getTableName } from '@/orm/utils/get-table-name'
import { TSchema } from '@/schemas/schema.type'

export function validOrderBy(
  orderBy: Array<[string, 'asc' | 'desc']>,
  schema: TSchema
): { orderBy?: Array<[string, 'asc' | 'desc']> } {
  const nameList = getFields(schema)
  const fieldsInvalidos = []
  let fieldsLivres = nameList.sort()

  if (!Array.isArray(orderBy))
    throw new Error(`sort deve ser Array<[string, "asc" | "desc"]>`)

  for (const flt of orderBy) {
    const [field, direction] = flt
    if (!['desc', 'asc'].includes(direction))
      throw new Error(`${field} deve ser "asc" | "desc"`)

    if (typeof field !== 'string' || flt.length < 2 || flt.length > 3)
      throw new Error('filter deve ser [string, any?, any?][]')
    if (!nameList.includes(field)) {
      fieldsInvalidos.push(field)
    }
    fieldsLivres = fieldsLivres.filter((f) => f !== field)
  }

  if (fieldsInvalidos.length > 0) {
    throw new Error(
      `[${fieldsInvalidos}] não ${
        fieldsInvalidos.length === 1
          ? 'é um campo válido'
          : 'são campos válidos'
      } para where em ${getTableName(schema)} use: ${fieldsLivres}`
    )
  }
  return { orderBy }
}
