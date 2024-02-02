import * as _ from 'lodash-es'

export function query(data: any, query: any) {
  if (query.where && query.where.length > 0) {
    data = useWhere(data, query.where)
  }

  if (query.orderBy && query.orderBy.length > 0) {
    data = useOrderBy(data, query.orderBy)
  }

  if (query.select && query.select.length > 0) {
    data = useSelect(data, query.select)
  }
  return data
}

function useSelect(data: any, select: string[]) {
  return data.map((item: any) => {
    return _.pick(item, select)
  })
}

function useWhere(data: any, where: any) {
  const field = where[0][0]
  const value = where[0][2] || where[0][1]

  return _.filter(data, (item) => {
    return item[field] == value
  })
}

function useOrderBy(data: any, orderBy: any) {
  const field = orderBy[0][0]
  const order = orderBy[0][1]
  return _.orderBy(data, [field], [order])
}
