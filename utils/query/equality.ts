import { TWhere } from '@/types'

export function getEquality(filter: string) {
  let value: string | string[] = filter.trim()
  let equality = '='

  let start = value.slice(0, 2)

  if (['>=', '<='].includes(start)) {
    equality = start
    value = value.slice(2).trim()
    return { equality, value }
  }

  start = value.slice(0, 1)
  if (['=', '>', '<'].includes(start)) {
    equality = start
    value = value.slice(1).trim()
    return { equality, value }
  }

  if (value.includes('?')) {
    equality = 'like'
    value = value.replaceAll('?', '%')
    return { equality, value }
  }

  if (value.includes('<>')) {
    equality = 'between'
    value = value.split('<>').map((vlr) => vlr.trim())
    return { equality, value }
  }

  if (value.trim() === '-') {
    equality = 'null'
    value = ''
    return { equality, value }
  }

  return { equality, value }
}

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
