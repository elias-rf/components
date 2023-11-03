import { getFields } from '@/orm/utils/schema/get-fields'
import { getTable } from '@/orm/utils/schema/get-table'
import type { TSchema } from '@/schemas/schema.type'
import { isEmpty } from '@/utils/identify/is-empty'

function fieldName(field: string) {
  return field.split(' ')[0]
}

export function validFirst(
  first: any,
  schema: TSchema
): { first?: Array<string> } {
  const nameList = getFields(schema)
  const fieldsInvalidos = []
  let fieldsLivres = nameList

  if (isEmpty(first)) return { first: ['*'] }
  if (!Array.isArray(first)) throw new Error('select deve ser Array<string>')
  if (first.length === 1 && first[0] === '*') return { first: ['*'] }

  for (const fld of first) {
    const field = fieldName(fld)
    if (typeof field !== 'string')
      throw new Error('select deve ser Array<string>')

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
      } para select em ${getTable(schema)} use: ${fieldsLivres}`
    )
  }
  return { first }
}
