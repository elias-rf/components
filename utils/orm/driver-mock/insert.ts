import { TQuery } from './driver-mock.js'

export function fnInsert({
  data,
  query,
}: {
  data: Record<string, any>[]
  query: TQuery
}) {
  query.insert && data.push(query.insert)
  return { data, query }
}
