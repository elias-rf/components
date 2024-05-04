/**
 * recebe Where no padrao [[field,equalitity,value]] e retorna {field:value}
 */
export function formatWhere(where, columns) {
  if (!where) return {}
  const result = where.reduce((acc, cur) => {
    const format =
      columns.find((col) => col.name === cur[0])?.format || ((v) => v)
    let equalitity = ''
    let value = cur[1]
    if (cur.length === 3) {
      equalitity = cur[1]
      value = cur[2]
    }
    if (cur[1] === 'like') {
      value = cur[2].replaceAll('%', '?')
    }
    if (cur[1] === 'between') {
      value = cur[2].join(' <> ')
    }
    return {
      ...acc,
      [cur[0]]: (equalitity ? equalitity + ' ' : '') + format(value),
    }
  }, {})
  return result
  return where
}
