import { produtoMapFields } from '@/data/plano/produto/produto.map-fields.js'
import {
  TProdutoDtoFields,
  TProdutoFields,
} from '@/data/plano/produto/produto.type.js'
import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'

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
