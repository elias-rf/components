import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'
import { produtoItemMapFields } from './produto-item.map-fields.js'
import {
  TProdutoItemDtoFields,
  TProdutoItemFields,
} from './produto-item.type.js'

export const produtoItemToDto = (
  data: TData<TProdutoItemFields>
): TData<TProdutoItemDtoFields> => {
  const obj = {} as TData<TProdutoItemDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(produtoItemMapFields).forEach((key) => {
    if (Object.hasOwn(data, produtoItemMapFields[key as TProdutoItemDtoFields]))
      obj[key as TProdutoItemDtoFields] =
        data[produtoItemMapFields[key as TProdutoItemDtoFields]]
  })

  return obj
}
