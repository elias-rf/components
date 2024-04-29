import { isEmpty } from 'lodash-es'
import { estoqueMapFields } from '../../../data/plano/estoque/estoque.map-fields.mjs'

export const estoqueToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(estoqueMapFields).forEach((key) => {
    if (Object.hasOwn(data, estoqueMapFields[key]))
      obj[key] = data[estoqueMapFields[key]]
  })

  return obj
}
