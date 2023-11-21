import { TOrderBy, TSelect, TWhere } from '@/types/index.js'

export type Association = {
  [association: string]: {
    select: (string | Association)[]
    from: string
    source: string | string[]
    target: string | string[]
    type: 'hasOne' | 'hasMany'
  }
}

type TRaw = [raw: string, args?: any]

export type TQuery = Partial<{
  avg: string
  count: string
  del: true
  first: TSelect<string>
  from: string
  fromRaw: TRaw
  groupBy: Array<string>
  groupByRaw: TRaw
  having: Array<[string, any?, any?]>
  havingRaw: TRaw
  increment: [string, number]
  insert: Record<string, any>
  join: Array<[string, string, string, any?]>
  limit: number
  max: string
  min: string
  offset: number
  orderBy: TOrderBy<string>
  orderByRaw: TRaw
  raw: TRaw
  returning: Array<string>
  select: TSelect<string>
  selectRaw: TRaw
  sum: string
  update: Record<string, any>
  where: Array<[string, any?, any?]>
  whereRaw: TRaw
  whereNot: TWhere<string>
}>

export interface TDbAdapter {
  startLog: () => void
  stopLog: () => void
  sql: () => string[]
  run: (query: any) => Promise<any>
}
