import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'
import { groupMapFields } from './group.map-fields.js'
import { TGroupDtoFields, TGroupFields } from './group.type.js'

export const groupToDto = (
  data: TData<TGroupFields>
): TData<TGroupDtoFields> => {
  const obj = {} as TData<TGroupDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(groupMapFields).forEach((key) => {
    if (Object.hasOwn(data, groupMapFields[key as TGroupDtoFields])) {
      obj[key as TGroupDtoFields] = data[groupMapFields[key as TGroupDtoFields]]
    }
  })
  return obj
}
