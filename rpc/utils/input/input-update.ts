import { OrmTable } from '@/orm'

export function inputUpdate<TFields extends string, TKeys extends string>(
  controller: OrmTable<TFields, TKeys>
) {
  return ({ id, data, returning }: any) => {
    id = controller.validId(id)
    data = controller.validData(data)
    returning = controller.validReturning(returning)

    return {
      id: id.where,
      data,
      returning,
    } as {
      id: Array<[TKeys, any]>
      returning?: TFields[]
      data: Partial<Record<TFields, any>>
    }
  }
}
