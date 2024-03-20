import { fornecedorMapFields } from '@/data/plano/fornecedor/fornecedor.map-fields.js'
import {
  TFornecedorDtoFields,
  TFornecedorFields,
} from '@/data/plano/fornecedor/fornecedor.type.js'
import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'

export const fornecedorToDto = (
  data: TData<TFornecedorFields>
): TData<TFornecedorDtoFields> => {
  const obj = {} as TData<TFornecedorDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(fornecedorMapFields).forEach((key) => {
    if (Object.hasOwn(data, fornecedorMapFields[key as TFornecedorDtoFields]))
      obj[key as TFornecedorDtoFields] =
        data[fornecedorMapFields[key as TFornecedorDtoFields]]
  })

  return obj
}
