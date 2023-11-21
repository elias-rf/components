import { getFields } from '@/orm/utils/schema/get-fields.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TInclude, TSelect } from '@/types/index.js'
import { pushUnique } from '@/utils/array/push-unique.js'

export function selectFromInclude(
  select: TSelect<string>,
  include: TInclude,
  schema: TSchema
) {
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
