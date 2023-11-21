import { TWhere } from '@/types/index.js'

export function whereType(where: TWhere<any>, field: string, type: string) {
  where.forEach((whr) => {
    if (whr[0] === field) {
      if (type === 'int') {
        whr[whr.length - 1] = parseInt(whr[whr.length - 1])
      }
    }
  })
  return where
}
