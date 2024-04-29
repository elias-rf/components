import { isEmpty } from 'lodash-es'
import { etiquetaInternaMapFields } from '../../../data/oftalmo/etiqueta-interna/etiqueta-interna.map-fields.mjs'

export const etiquetaInternaToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(etiquetaInternaMapFields).forEach((key) => {
    if (Object.hasOwn(data, etiquetaInternaMapFields[key])) {
      obj[key] = data[etiquetaInternaMapFields[key]]
    }
  })
  return obj
}
