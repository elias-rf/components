import { TWhere } from '@/types'
import { getEquality } from '@/utils/query/get-equality'

export function equalityToObject(where?: TWhere<string>) {
  if (!where) return {}
  const result = where.reduce((acc, cur) => {
    let value = `${cur[1]}${cur.length === 3 ? ` ${cur[2]}` : ''}`
    if (cur[1] === 'like') {
      value = cur[2].replaceAll('%', '?')
    }
    if (cur[1] === 'between') {
      value = cur[2].join(' <> ')
    }
    return {
      ...acc,
      [cur[0]]: value,
    }
  }, {})
  return result
}

export function equalityFromObject(filter: { [field: string]: any }) {
  const result = Object.entries(filter).map((item) => {
    const { equality, value } = getEquality(item[1])
    item[1] = equality
    item.push(value)
    return item
  })
  return result
}
