import { isEmpty } from 'lodash-es'
import { usuarioMapFields } from './usuario.map-fields.mjs'

export const usuarioToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(usuarioMapFields).forEach((key) => {
    if (Object.hasOwn(data, usuarioMapFields[key])) {
      obj[key] = data[usuarioMapFields[key]]
    }
  })
  return obj
}
