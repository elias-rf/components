import { isEmpty } from 'lodash-es'
import { operacaoProducaoMapFields } from '../../../data/oftalmo/operacao-producao/operacao-producao.map-fields.mjs'

export const operacaoProducaoToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(operacaoProducaoMapFields).forEach((key) => {
    if (Object.hasOwn(data, operacaoProducaoMapFields[key])) {
      obj[key] = data[operacaoProducaoMapFields[key]]
    }
  })
  return obj
}
