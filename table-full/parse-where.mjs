/**
 * recebe Where no padrao {field:value} e retorna [[field,equalitity,value]]
 */

import { getEquality } from './get-equality.mjs'

export function parseWhere(filter, columns) {
  const result = Object.entries(filter).map((item) => {
    const parse =
      columns.find((col) => col.name === item[0])?.parse || ((v) => v)
    const { equality, value } = getEquality(item[1])
    item[1] = equality
    item.push(parse(value))
    return item
  })
  return result
}
