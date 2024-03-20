import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'
import { produtoMapFields } from './produto.map-fields.js'
import { TProdutoDtoFields, TProdutoFields } from './produto.type.js'

export const produtoToDto = (
  data: TData<TProdutoFields>
): TData<TProdutoDtoFields> => {
  const obj = {} as TData<TProdutoDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(produtoMapFields).forEach((key) => {
    if (Object.hasOwn(data, produtoMapFields[key as TProdutoDtoFields]))
      obj[key as TProdutoDtoFields] =
        data[produtoMapFields[key as TProdutoDtoFields]]
  })

  return obj
}
