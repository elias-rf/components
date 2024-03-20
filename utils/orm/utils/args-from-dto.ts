import { TData, TOrderBy, TSelect, TWhere } from '@/types/index.js'

type TArgs = {
  select?: string[]
  returning?: string[]
  where?: TWhere<string>
  orderBy?: TOrderBy<string>
  count?: string[]
  data?: TData<string>
  limit?: number
  groupBy?: string[]
  sum?: any
  min?: any
  max?: any
  include?: any
  increment?: [string, number]
}

export function argsFromDto(data: TArgs, fields: { [fld: string]: string }) {
  const response: TArgs = {}
  if (data.select) {
    response.select = selectArgs(data.select, fields)
  }
  if (data.groupBy) {
    response.groupBy = selectArgs(data.groupBy, fields)
  }
  if (data.returning) {
    response.returning = selectArgs(data.returning, fields)
  }
  if (data.where) {
    response.where = whereArgs(data.where, fields)
  }
  if (data.orderBy) {
    response.orderBy = orderByArgs(data.orderBy, fields)
  }
  if (data.count) {
    response.count = data.count
  }
  if (data.limit) {
    response.limit = data.limit
  }
  if (data.sum) {
    response.sum = data.sum
  }
  if (data.min) {
    response.min = data.min
  }
  if (data.max) {
    response.max = data.max
  }
  if (data.include) {
    response.include = data.include
  }
  if (data.increment) {
    response.increment = incrementArgs(data.increment, fields)
  }
  if (data.data) {
    response.data = dataArgs(data.data, fields)
  }
  return response
}

function incrementArgs(
  data: TArgs['increment'],
  fields: { [fld: string]: string }
) {
  if (!data) {
    return data
  }
  const response: TArgs['increment'] = [...data]
  response[0] = fields[data[0]]
  return response
}

function selectArgs(data: TArgs['select'], fields: { [fld: string]: string }) {
  return data?.map((item) => fields[item as string]) as TSelect<string>
}

function whereArgs(
  data: TArgs['where'],
  fields: { [fld: string]: string }
): TWhere<string> {
  return data?.map((item) => {
    const response: string[] = [...item]
    response[0] = fields[response[0]]
    return response
  }) as TWhere<string>
}
function orderByArgs(
  data: TArgs['orderBy'],
  fields: { [fld: string]: string }
) {
  return data?.map((item) => {
    const response: string[] = [...item]
    response[0] = fields[response[0]]
    return response
  }) as TOrderBy<string>
}

function dataArgs(
  data: TArgs['data'] = {},
  fields: { [fld: string]: string }
): TData {
  return Object.keys(data).reduce((acc, key) => {
    acc[fields[key]] = data[key]
    return acc
  }, {} as TData)
}
