import { pick } from 'lodash-es'

export function fnSelect({ data, query }) {
  if (!query.select || query.select.length === 0 || query.select.includes('*'))
    return { data, query }
  const response = data.map((rec) => {
    return pick(rec, query.select || [])
  })
  return { data: response, query }
}
