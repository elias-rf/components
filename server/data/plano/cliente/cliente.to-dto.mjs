import { isEmpty } from 'lodash-es'
import { clienteMapFields } from '../../../data/plano/cliente/cliente.map-fields.mjs'

export const clienteToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(clienteMapFields).forEach((key) => {
    if (Object.hasOwn(data, clienteMapFields[key]))
      obj[key] = data[clienteMapFields[key]]
  })

  return obj
}
