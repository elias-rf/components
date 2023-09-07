import { OrmTable } from '@/orm'
import { TOrderBy, TSelect, TWhere } from '@/types'

export function inputList<TFields extends string, TKeys extends string>(
  controller: OrmTable<TFields, TKeys>
) {
  return ({ where, orderBy, max, min, count }: any) => {
    where = controller.validWhere(where)
    orderBy = controller.validOrderBy(orderBy)

    return {
      ...where,
      ...orderBy,
      max,
      min,
      count,
    } as {
      where?: TWhere<TFields>
      orderBy?: TOrderBy<TFields>
      limit?: number
      select?: TSelect<TFields>
      sum?: any
      min?: any
      max?: any
      group?: TSelect<TFields>
    }
  }
}
