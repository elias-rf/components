import { pick } from 'lodash-es'
import { TQuery } from './driver-mock.js'

export function fnSelect({
  data,
  query,
}: {
  data: Record<string, any>[]
  query: TQuery
}) {
  if (!query.select || query.select.length === 0 || query.select.includes('*'))
    return { data, query }
  const response = data.map((rec) => {
    return pick(rec, query.select || [])
  })
  return { data: response, query }
}
