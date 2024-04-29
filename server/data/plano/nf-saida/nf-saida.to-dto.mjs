import { isEmpty } from 'lodash-es'
import { nfSaidaMapFields } from '../../../data/plano/nf-saida/nf-saida.map-fields.mjs'

export const nfSaidaToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(nfSaidaMapFields).forEach((key) => {
    if (Object.hasOwn(data, nfSaidaMapFields[key]))
      obj[key] = data[nfSaidaMapFields[key]]
  })

  return obj
}
