import { TFormStatus } from '@/types/index.js'

export type TCreateButtonsStore = {
  status: TFormStatus
  onCancel: () => void
  onEdit: () => void
  onNew: () => void
}

export const createButtonsStore = (
  set: any,
  get: any
): TCreateButtonsStore => ({
  status: 'none' as TFormStatus,

  onNew: () => {
    set(
      () => ({ record: get().recordClear, status: 'new', selection: [] }),
      false,
      'onNew'
    )
  },

  onEdit: () => {
    set(() => ({ status: 'edit' }), false, 'onEdit')
  },

  onCancel: () => {
    if (get().status === 'new') {
      set(() => ({ status: 'none' }))
      return
    }
    set(() => ({ status: 'view' }), false, 'onCancel')
  },
})
