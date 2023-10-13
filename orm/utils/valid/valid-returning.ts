import { getFields } from '@/orm/utils/get-fields'
import { getTableName } from '@/orm/utils/get-table-name'
import { TSchema } from '@/schemas/schema.type'
import { TSelect } from '@/types'
import { isEmpty } from '@/utils/identify/is-empty'

export function validReturning(
  returning: TSelect<string> | undefined,
  schema: TSchema
): { returning?: Array<string> } {
  const nameList = getFields(schema)
  const fieldsInvalidos = []
  let fieldsLivres = nameList.sort()

  if (isEmpty(returning)) return {}
  if (!Array.isArray(returning))
    throw new Error('returning deve ser Array<string>')
  if (returning.length === 1 && returning[0] === '*')
    return { returning: ['*'] }

  for (const field of returning) {
    if (typeof field !== 'string')
      throw new Error('returning deve ser Array<string>')

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
      } para returning em ${getTableName(schema)} use: ${fieldsLivres}`
    )
  }
  return { returning: returning }
}