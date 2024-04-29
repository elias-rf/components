import { isEmpty } from 'lodash-es'
import { etiquetaExternaMapFields } from '../../../data/oftalmo/etiqueta-externa/etiqueta-externa.map-fields.mjs'

export const etiquetaExternaToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(etiquetaExternaMapFields).forEach((key) => {
    if (Object.hasOwn(data, etiquetaExternaMapFields[key])) {
      obj[key] = data[etiquetaExternaMapFields[key]]
    }
  })
  return obj
}
