import { isEmpty } from 'lodash-es'
import { nfEntradaLogMapFields } from './nf-entrada-log.map-fields.mjs'

export const nfEntradaLogToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(nfEntradaLogMapFields).forEach((key) => {
    if (Object.hasOwn(data, nfEntradaLogMapFields[key]))
      obj[key] = data[nfEntradaLogMapFields[key]]
  })

  return obj
}
