import { getFieldType } from '@/orm/utils/get-field-type'
import { getFields } from '@/orm/utils/get-fields'
import { getTableName } from '@/orm/utils/get-table-name'
import { TSchema } from '@/schemas/schema.type'
import { TData } from '@/types'
import { getType } from '@/utils/identify/get-type'

export function validData<TFields extends string>(
  data: Partial<TData<TFields>> | undefined,
  schema: TSchema
) {
  const nameList = getFields(schema)
  const fieldsInvalidos = []
  let fieldsLivres = nameList.sort()

  if (typeof data !== 'object' || Array.isArray(data))
    throw new Error('data deve ser Record<string, any>')

  for (const field in data as TData<TFields>) {
    // const value = data[field]

    if (!nameList.includes(field)) {
      fieldsInvalidos.push(field)
    }
    // else {
    //   if (getType(value) !== getFieldType(field, schema)) {
    //     throw new Error(
    //       `${getTableName(schema)}.${field} deve ser do tipo ${getFieldType(
    //         field,
    //         schema
    //       )} mas é ${getType(value)}`
    //     )
    //   }
    // }
    fieldsLivres = fieldsLivres.filter((f) => f !== field)
  }

  if (fieldsInvalidos.length > 0) {
    throw new Error(
      `[${fieldsInvalidos}] não ${
        fieldsInvalidos.length === 1
          ? 'é um campo válido'
          : 'são campos válidos'
      } para data em ${getTableName(schema)} use: ${fieldsLivres}`
    )
  }
  return data as TData<TFields>
}
