import { TOrderBy } from '@/types/index.js'

export function _orderBy(data: Record<string, any>[], orderBy: TOrderBy<any>) {
  const [field, order] = orderBy[0]
  return data.sort((a, b) => {
    if (order === 'asc' && a[field] > b[field]) return 1
    if (order === 'asc' && a[field] < b[field]) return -1
    if (order === 'desc' && a[field] > b[field]) return -1
    if (order === 'desc' && a[field] < b[field]) return 1
    return 0
  })
}
