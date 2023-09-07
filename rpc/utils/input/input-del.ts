import { OrmTable } from '@/orm'

export function inputDel<TFields extends string, TKeys extends string>(
  controller: OrmTable<TFields, TKeys>
) {
  return ({ id }: any) => {
    id = controller.validId(id)

    return {
      id: id.where,
    } as {
      id: [TKeys, any][]
    }
  }
}
