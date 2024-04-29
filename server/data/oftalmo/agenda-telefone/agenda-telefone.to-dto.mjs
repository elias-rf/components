import { isEmpty } from 'lodash-es'
import { agendaTelefoneMapFields } from '../../../data/oftalmo/agenda-telefone/agenda-telefone.map-fields.mjs'

export const agendaTelefoneToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(agendaTelefoneMapFields).forEach((key) => {
    if (Object.hasOwn(data, agendaTelefoneMapFields[key])) {
      obj[key] = data[agendaTelefoneMapFields[key]]
    }
  })
  return obj
}
