import { isEmpty } from 'lodash-es'
import { nfEntradaControleMapFields } from '../../../data/plano/nf-entrada-controle/nf-entrada-controle.map-fields.mjs'

export const nfEntradaControleToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(nfEntradaControleMapFields).forEach((key) => {
    if (Object.hasOwn(data, nfEntradaControleMapFields[key]))
      obj[key] = data[nfEntradaControleMapFields[key]]
  })

  return obj
}
