import { isEmpty } from 'lodash-es'
import { produtoMapFields } from './produto.map-fields.mjs'

export const produtoToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(produtoMapFields).forEach((key) => {
    if (Object.hasOwn(data, produtoMapFields[key]))
      obj[key] = data[produtoMapFields[key]]
  })

  return obj
}
