import { TData } from '@/types'

export type TCreateRecordStore<TFields extends string> = {
  record: TData<TFields>
  setRecord: (record: TData<TFields>) => void
}

export const createRecordStore = <TFields extends string>(
  set: any
): TCreateRecordStore<TFields> => ({
  record: {} as TData<TFields>,
  setRecord: (record) => {
    set(() => ({ record }), false, 'setRecord')
  },
})
