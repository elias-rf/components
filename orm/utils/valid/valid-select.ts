import { getFields } from '@/orm/utils/get-fields'
import { getTableName } from '@/orm/utils/get-table-name'
import { TSchema } from '@/schemas/schema.type'
import { isEmpty } from '@/utils/identify/is-empty'
import { TSelect } from '@/types'

function fieldName(field: string) {
  return field.split(' ')[0]
}

export function validSelect<TFields>(
  select: TSelect<TFields> | undefined,
  schema: TSchema
): { select: TSelect<TFields> } {
  const nameList = getFields(schema)
  const fieldsInvalidos = []
  let fieldsLivres = nameList.sort()

  if (typeof select === 'undefined' || isEmpty(select)) return { select: ['*'] }
  if (!Array.isArray(select)) throw new Error('select deve ser Array<string>')
  if (select.includes('*')) return { select: ['*'] }

  for (const fld of select as Array<string>) {
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
      } para select em ${getTableName(schema)} use: ${fieldsLivres}`
    )
  }
  return { select }
}
