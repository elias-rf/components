import { isEmpty } from 'lodash-es'
import { fornecedorMapFields } from '../../../data/plano/fornecedor/fornecedor.map-fields.mjs'

export const fornecedorToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(fornecedorMapFields).forEach((key) => {
    if (Object.hasOwn(data, fornecedorMapFields[key]))
      obj[key] = data[fornecedorMapFields[key]]
  })

  return obj
}
