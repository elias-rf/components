import { getFieldType } from '@/orm/utils/get-field-type'
import { getFields } from '@/orm/utils/get-fields'
import { getTableName } from '@/orm/utils/get-table-name'
import { TSchema } from '@/schemas/schema.type'
import { getType } from '@/utils/identify/get-type'

export function validWhere(
  where: Array<[string, any?, any?]>,
  schema: TSchema
): { where?: Array<[string, any?, any?]> } {
  const nameList = getFields(schema)
  const fieldsInvalidos = []
  let fieldsLivres = nameList.sort()
  if (!Array.isArray(where))
    throw new Error('where deve ser [string, any?, any?][]')

  for (const flt of where) {
    const [field, value1, value2] = flt
    const value = value2 || value1
    const equality = value1
    if (typeof field !== 'string' || flt.length < 2 || flt.length > 3)
      throw new Error('where deve ser [string, any?, any?][]')
    if (!nameList.includes(field)) {
      fieldsInvalidos.push(field)
    } else {
      if (
        getType(value) !== getFieldType(field, schema) &&
        !['in'].includes(equality)
      ) {
        throw new Error(
          `${getTableName(schema)}.${field} deve ser do tipo ${getFieldType(
            field,
            schema
          )} mas é ${getType(value)}`
        )
      }
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
  return { where }
}
