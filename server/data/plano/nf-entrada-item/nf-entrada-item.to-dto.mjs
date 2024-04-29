import { isEmpty } from 'lodash-es'
import { nfEntradaItemMapFields } from './nf-entrada-item.map-fields.mjs'

export const nfEntradaItemToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(nfEntradaItemMapFields).forEach((key) => {
    if (Object.hasOwn(data, nfEntradaItemMapFields[key]))
      obj[key] = data[nfEntradaItemMapFields[key]]
  })

  return obj
}
