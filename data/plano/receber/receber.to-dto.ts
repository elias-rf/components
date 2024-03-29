import { receberMapFields } from '@/data/plano/receber/receber.map-fields.js'
import {
  TReceberDtoFields,
  TReceberFields,
} from '@/data/plano/receber/receber.type.js'
import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'

export const receberToDto = (
  data: TData<TReceberFields>
): TData<TReceberDtoFields> => {
  const obj = {} as TData<TReceberDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(receberMapFields).forEach((key) => {
    if (Object.hasOwn(data, receberMapFields[key as TReceberDtoFields]))
      obj[key as TReceberDtoFields] =
        data[receberMapFields[key as TReceberDtoFields]]
  })

  return obj
}
