import type { TSchema } from '@/schemas/schema.type.js'
import { isEmpty } from '@/utils/identify/is-empty.js'
import { getName } from '@/utils/orm/utils/map-fields/get-name.js'
import { getFields } from '@/utils/orm/utils/schema/get-fields.js'
import { getTable } from '@/utils/orm/utils/schema/get-table.js'

export function validGroupBy(
  groupBy: any,
  schema: TSchema,
  mapFields?: Record<string, string>
) {
  const nameList = getFields(schema)
  const fieldsInvalidos = []
  let fieldsLivres = nameList

  if (isEmpty(groupBy)) return {}
  if (!Array.isArray(groupBy)) throw new Error('select deve ser Array<string>')
  if (groupBy.length === 1 && groupBy[0] === '*') return { select: ['*'] }

  for (const field of groupBy) {
    if (typeof field !== 'string')
      throw new Error('select deve ser Array<string>')

    if (!nameList.includes(field)) {
      fieldsInvalidos.push(field)
    }
    fieldsLivres = fieldsLivres.filter((f) => f !== field)
  }
  if (fieldsInvalidos.length > 0) {
    throw new Error(
      `[${fieldsInvalidos.map((f) => getName(f, mapFields || {}))}] não ${
        fieldsInvalidos.length === 1
          ? 'é um campo válido'
          : 'são campos válidos'
      } para select em ${getTable(schema)} use: ${fieldsLivres.map((f) => getName(f, mapFields || {}))}`
    )
  }
  return { groupBy }
}
