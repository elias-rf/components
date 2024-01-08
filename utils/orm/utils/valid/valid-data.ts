import type { TSchema } from '@/schemas/schema.type.js'
import { TData } from '@/types/index.js'
import { getFields } from '@/utils/orm/utils/schema/get-fields.js'
import { getTable } from '@/utils/orm/utils/schema/get-table.js'

export function validData<TFields extends string>(
  data: Partial<TData<TFields>> | undefined,
  schema: TSchema
) {
  const nameList = getFields(schema)
  const fieldsInvalidos = []
  let fieldsLivres = nameList

  if (typeof data !== 'object' || Array.isArray(data))
    throw new Error('data deve ser Record<string, any>')

  for (const field in data as TData<TFields>) {
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
      } para data em ${getTable(schema)} use: ${fieldsLivres}`
    )
  }
  return data as TData<TFields>
}