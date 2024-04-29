import { isEmpty } from 'lodash-es'
import { ordemProducaoOperacaoMapFields } from '../../../data/oftalmo/ordem-producao-operacao/ordem-producao-operacao.map-fields.mjs'

export const ordemProducaoOperacaoToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(ordemProducaoOperacaoMapFields).forEach((key) => {
    if (Object.hasOwn(data, ordemProducaoOperacaoMapFields[key])) {
      obj[key] = data[ordemProducaoOperacaoMapFields[key]]
    }
  })
  return obj
}
