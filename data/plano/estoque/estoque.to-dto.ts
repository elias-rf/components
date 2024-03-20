import { estoqueMapFields } from '@/data/plano/estoque/estoque.map-fields.js'
import {
  TEstoqueDtoFields,
  TEstoqueFields,
} from '@/data/plano/estoque/estoque.type.js'
import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'

export const estoqueToDto = (
  data: TData<TEstoqueFields>
): TData<TEstoqueDtoFields> => {
  const obj = {} as TData<TEstoqueDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(estoqueMapFields).forEach((key) => {
    if (Object.hasOwn(data, estoqueMapFields[key as TEstoqueDtoFields]))
      obj[key as TEstoqueDtoFields] =
        data[estoqueMapFields[key as TEstoqueDtoFields]]
  })

  return obj
}
