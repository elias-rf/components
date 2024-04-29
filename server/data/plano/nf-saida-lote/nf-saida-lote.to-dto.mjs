import { isEmpty } from 'lodash-es'
import { nfSaidaLoteMapFields } from './nf-saida-lote.map-fields.mjs'

export const nfSaidaLoteToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(nfSaidaLoteMapFields).forEach((key) => {
    if (Object.hasOwn(data, nfSaidaLoteMapFields[key]))
      obj[key] = data[nfSaidaLoteMapFields[key]]
  })

  return obj
}
