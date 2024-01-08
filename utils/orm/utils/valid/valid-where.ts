import type { TSchema } from '@/schemas/schema.type.js'
import { getFields } from '@/utils/orm/utils/schema/get-fields.js'
import { getTable } from '@/utils/orm/utils/schema/get-table.js'

export function validWhere(
  where: Array<[string, any?, any?]>,
  schema: TSchema
): { where?: Array<[string, any?, any?]> } {
  const nameList = getFields(schema)
  const fieldsInvalidos = []
  let fieldsLivres = nameList
  if (!Array.isArray(where))
    throw new Error('where deve ser [string, any?, any?][]')

  for (const flt of where) {
    const [field] = flt
    // const value = value2 || value1
    // const equality = value1
    if (typeof field !== 'string' || flt.length < 2 || flt.length > 3)
      throw new Error('where deve ser [string, any?, any?][]')
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
      } para where em ${getTable(schema)} use: ${fieldsLivres}`
    )
  }
  return { where }
}