import { isEmpty } from '../../../../utils/identify/is-empty.mjs'
import { getName } from '../../../../utils/orm/utils/map-fields/get-name.mjs'
import { getFields } from '../../../../utils/orm/utils/schema/get-fields.mjs'
import { getTable } from '../../../../utils/orm/utils/schema/get-table.mjs'

function fieldName(field) {
  return field.split(' ')[0]
}

export function validSelect(select, schema, mapFields) {
  const nameList = getFields(schema)
  const fieldsInvalidos = []
  let fieldsLivres = nameList

  if (typeof select === 'undefined' || isEmpty(select)) return { select: [] }
  // if (typeof select === 'undefined' || isEmpty(select)) return { select: ['*'] }
  if (!Array.isArray(select)) throw new Error('select deve ser Array<string>')
  if (select.includes('*')) return { select: ['*'] }

  for (const fld of select) {
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
      `[${fieldsInvalidos.map((f) => getName(f, mapFields || {}))}] não ${
        fieldsInvalidos.length === 1
          ? 'é um campo válido'
          : 'são campos válidos'
      } para select em ${getTable(schema)} use: ${fieldsLivres.map((f) => getName(f, mapFields || {}))}`
    )
  }
  return { select }
}
