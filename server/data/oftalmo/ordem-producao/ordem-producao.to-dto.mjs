import { isEmpty } from 'lodash-es'
import { ordemProducaoMapFields } from '../../../data/oftalmo/ordem-producao/ordem-producao.map-fields.mjs'

export const ordemProducaoToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(ordemProducaoMapFields).forEach((key) => {
    if (Object.hasOwn(data, ordemProducaoMapFields[key])) {
      obj[key] = data[ordemProducaoMapFields[key]]
    }
  })
  return obj
}
