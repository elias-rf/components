import { OrmTable } from '@/orm'
import { TId, TSelect } from '@/types'

export function inputRead<TFields extends string, TKeys extends string>(
  controller: OrmTable<TFields, TKeys>
) {
  return ({ id, select }: any) => {
    id = controller.validId(id)

    return {
      id: id.where,
      select,
    } as {
      id: TId<TKeys>
      select?: TSelect<TFields>
    }
  }
}
