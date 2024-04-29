import { isEmpty } from 'lodash-es'
import { nfEntradaMapFields } from '../../../data/plano/nf-entrada/nf-entrada.map-fields.mjs'

export const nfEntradaToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(nfEntradaMapFields).forEach((key) => {
    if (Object.hasOwn(data, nfEntradaMapFields[key]))
      obj[key] = data[nfEntradaMapFields[key]]
  })

  return obj
}
