import { TSelect } from '@/types/index.js'
import { pick } from '@/utils/object/pick.js'

export function _select(data: Record<string, any>[], select: TSelect<any>) {
  if (select.includes('*')) return data
  return data.map((rec) => {
    return pick(rec, select)
  })
}
