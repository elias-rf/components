import { isEmpty } from 'lodash-es'
import { receberMapFields } from '../../../data/plano/receber/receber.map-fields.mjs'

export const receberToDto = (data) => {
  const obj = {}
  if (isEmpty(data)) return obj

  Object.keys(receberMapFields).forEach((key) => {
    if (Object.hasOwn(data, receberMapFields[key]))
      obj[key] = data[receberMapFields[key]]
  })

  return obj
}
