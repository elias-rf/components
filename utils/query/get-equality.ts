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
