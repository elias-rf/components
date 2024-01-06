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
