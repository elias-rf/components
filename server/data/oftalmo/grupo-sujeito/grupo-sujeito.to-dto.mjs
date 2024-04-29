import { isEmpty } from 'lodash-es'
import { grupoSujeitoMapFields } from './grupo-sujeito.map-fields.mjs'

export const groupToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(grupoSujeitoMapFields).forEach((key) => {
    if (Object.hasOwn(data, grupoSujeitoMapFields[key])) {
      obj[key] = data[grupoSujeitoMapFields[key]]
    }
  })
  return obj
}
