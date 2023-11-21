/**
 * recebe Where no padrao {field:value} e retorna [[field,equalitity,value]]
 */

import { TColumn, TWhere } from '@/types/index.js'
import { getEquality } from '@/utils/query/get-equality.js'

export function parseWhere(
  filter: { [field: string]: any },
  columns: TColumn[]
): TWhere<string> {
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
