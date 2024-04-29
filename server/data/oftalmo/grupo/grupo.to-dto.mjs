import { isEmpty } from 'lodash-es'
import { grupoMapFields } from './grupo.map-fields.mjs'

export const grupoToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(grupoMapFields).forEach((key) => {
    if (Object.hasOwn(data, grupoMapFields[key])) {
      obj[key] = data[grupoMapFields[key]]
    }
  })
  return obj
}
