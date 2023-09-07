import { OrmTable } from '@/orm'
import { TData, TSelect } from '@/types'

export function inputCreate<TFields extends string, TKeys extends string>(
  controller: OrmTable<TFields, TKeys>
) {
  return ({
    data,
    returning,
  }: {
    data: Partial<TData<TFields>>
    returning?: TSelect<TFields>
  }) => {
    data = controller.validData(data)
    returning = controller.validReturning(returning)

    return {
      data,
      returning,
    } as {
      data: TData<TFields>
      returning?: TSelect<TFields>
    }
  }
}
