import { produtoControleMapFields } from '@/data/plano/produto-controle/produto-controle.map-fields.js'
import {
  TProdutoControleDtoFields,
  TProdutoControleFields,
} from '@/data/plano/produto-controle/produto-controle.type.js'
import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'

export const produtoControleToDto = (
  data: TData<TProdutoControleFields>
): TData<TProdutoControleDtoFields> => {
  const obj = {} as TData<TProdutoControleDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(produtoControleMapFields).forEach((key) => {
    if (
      Object.hasOwn(
        data,
        produtoControleMapFields[key as TProdutoControleDtoFields]
      )
    )
      obj[key as TProdutoControleDtoFields] =
        data[produtoControleMapFields[key as TProdutoControleDtoFields]]
  })

  return obj
}
