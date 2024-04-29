import { pushUnique } from '../../../../utils/array/push-unique.mjs'
import { getFields } from '../../../../utils/orm/utils/schema/get-fields.mjs'

export function selectFromInclude(select, include, schema) {
  if (select.includes('*')) return select
  const fieldSchema = getFields(schema)
  const selectInclude = []
  for (const includeName in include) {
    if (schema.relations) {
      if (schema.relations[includeName]) {
        for (const field of schema.relations[includeName].where) {
          const fld = field[field.length - 1]
          if (fieldSchema.includes(fld)) selectInclude.push(fld)
        }
      }
    }
  }

  return pushUnique(select, selectInclude)
}
