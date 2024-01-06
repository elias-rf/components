import { fnClone } from './clone.js'
import { TQuery } from './driver-mock.js'
import { fnWhere } from './where.js'

export function fnUpdate({
  data,
  query,
}: {
  data: Record<string, any>[]
  query: TQuery
}) {
  let field: string
  let value: any
  let equality: string

  if (!query.where) {
    data = []
    return { data, query }
  }

  let toUpdate = fnClone({ data, query }).data

  for (const whr of query.where) {
    if (whr.length === 2) {
      field = whr[0]
      equality = '='
      value = whr[1]
    }
    if (whr.length === 3) {
      field = whr[0]
      equality = whr[1]
      value = whr[2]
    }
    toUpdate = toUpdate
      .map((rec: Record<string, any>, index: number) => {
        rec._index = index
        return rec
      })
      .filter((rec: Record<string, any>) => {
        switch (equality) {
          case '=':
            return rec[field] === value
          case '>':
            return rec[field] > value
          case '<':
            return rec[field] < value
          case '<=':
            return rec[field] <= value
          case '>=':
            return rec[field] >= value
          case 'like':
            return rec[field].includes(value)
          case 'between':
            return rec[field] >= value[0] && rec[field] <= value[1]
          default:
            return true
        }
      })
  }

  for (let i = toUpdate.length - 1; i >= 0; i--) {
    data[toUpdate[i]._index] = {
      ...data[toUpdate[i]._index],
      ...query.update,
    }
  }
  return { data: fnWhere({ data, query }).data, query }
}
