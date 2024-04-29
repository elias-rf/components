import { isEmpty } from 'lodash-es'
import { esterilizacaoExternaMapFields } from '../../../data/oftalmo/esterilizacao-externa/esterilizacao-externa.map-fields.mjs'

export const esterilizacaoExternaToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(esterilizacaoExternaMapFields).forEach((key) => {
    if (Object.hasOwn(data, esterilizacaoExternaMapFields[key])) {
      obj[key] = data[esterilizacaoExternaMapFields[key]]
    }
  })
  return obj
}
