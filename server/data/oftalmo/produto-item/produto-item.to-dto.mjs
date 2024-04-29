import { isEmpty } from 'lodash-es'
import { produtoItemMapFields } from './produto-item.map-fields.mjs'

export const produtoItemToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(produtoItemMapFields).forEach((key) => {
    if (Object.hasOwn(data, produtoItemMapFields[key]))
      obj[key] = data[produtoItemMapFields[key]]
  })

  return obj
}
