import { TWhere } from '@/types'
import { isEmpty } from '@/utils/identify/is-empty'

export const whereUtil = {
  setValue(where: TWhere<any>, field: string, value: any): TWhere<any> {
    let flag = false
    if (!Array.isArray(where) || isEmpty(field)) {
      return []
    }
    let rsp = where.map((wh) => {
      if (!Array.isArray(wh)) return
      if (wh[0] === field) {
        flag = true
        if (isEmpty(value)) {
          return null
        }
        return [field, '=', value]
      }
      return wh
    })

    if (!flag && !isEmpty(value)) {
      rsp.push([field, '=', value])
    }
    rsp = rsp.filter((wh) => Array.isArray(wh))
    return rsp as TWhere<any>
  },
  /** Retorna o valor para o campo da lista de where */
  getValue(where: TWhere<any>, field: string) {
    if (isEmpty(field) || isEmpty(where)) return null
    for (const wh of where as TWhere<any>) {
      if (wh && wh[0] === field) {
        const rsp = wh[2]
        return rsp
      }
    }
    return null
  },
}
