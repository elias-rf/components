import { isEmpty } from 'lodash-es'
import { esterilizacaoInternaMapFields } from '../../../data/oftalmo/esterilizacao-interna/esterilizacao-interna.map-fields.mjs'

export const esterilizacaoInternaToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(esterilizacaoInternaMapFields).forEach((key) => {
    if (Object.hasOwn(data, esterilizacaoInternaMapFields[key])) {
      obj[key] = data[esterilizacaoInternaMapFields[key]]
    }
  })
  return obj
}
