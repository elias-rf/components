import { isEmpty } from 'lodash-es'
import { nfSaidaItemMapFields } from './nf-saida-item.map-fields.mjs'

export const nfSaidaItemToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(nfSaidaItemMapFields).forEach((key) => {
    if (Object.hasOwn(data, nfSaidaItemMapFields[key]))
      obj[key] = data[nfSaidaItemMapFields[key]]
  })

  return obj
}
