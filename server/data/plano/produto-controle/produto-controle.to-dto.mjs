import { isEmpty } from 'lodash-es'
import { produtoControleMapFields } from '../../../data/plano/produto-controle/produto-controle.map-fields.mjs'

export const produtoControleToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(produtoControleMapFields).forEach((key) => {
    if (Object.hasOwn(data, produtoControleMapFields[key]))
      obj[key] = data[produtoControleMapFields[key]]
  })

  return obj
}
