import { TQuery } from './driver-mock.js'

export function fnOrderBy({
  data,
  query,
}: {
  data: Record<string, any>[]
  query: TQuery
}) {
  if (!query.orderBy || query.orderBy.length === 0) return { data, query }
  const [field, order] = query.orderBy[0]
  const response = data.sort((a, b) => {
    if (order === 'asc' && a[field] > b[field]) return 1
    if (order === 'asc' && a[field] < b[field]) return -1
    if (order === 'desc' && a[field] > b[field]) return -1
    if (order === 'desc' && a[field] < b[field]) return 1
    return 0
  })
  return { data: response, query }
}
