import { whereType } from '@/client/lib/where-type.js'
import { TData, TId, TOrderBy, TWhere } from '@/types/index.js'
import { deepEqual } from '@/utils/object/deep-equal.js'

export type TCreateListStore<TFields extends string, TKeys extends string> = {
  list: TData<TFields>[]
  where: TWhere<TFields>
  orderBy: TOrderBy<TFields>
  selection: TId<TKeys>
  setWhere: (where: TWhere<TFields>) => void
  setOrderBy: (orderBy: TOrderBy<TFields>) => void
  setSelection: (selection: TId<TKeys>) => void
}

export const createListStore = <TFields extends string, TKeys extends string>(
  set: any,
  get: any
): TCreateListStore<TFields, TKeys> => ({
  list: [],
  where: [],
  orderBy: [],
  selection: [],
  setWhere: (where) => {
    where = whereType(where, 'id', 'int')
    set(() => ({ where }), false, 'setWhere')
  },

  setOrderBy: (orderBy) => {
    set(() => ({ orderBy }), false, 'setOrderBy')
  },

  setSelection: (selection) => {
    if (deepEqual(selection, get().selection)) {
      set(() => ({ selection: [], status: 'none' }), false, 'setSelection')
      return
    }
    set(() => ({ selection, status: 'view' }), false, 'setSelection')
  },
})
