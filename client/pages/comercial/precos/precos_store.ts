import { createSelectors } from '@/client/lib/create-selectors.js'
import { TData } from '@/types/index.js'
import { round } from '@/utils/number/round.js'
import { devtools } from 'zustand/middleware'
import { createStore } from 'zustand/vanilla'

const tableName = 'precos' as const

type TPrecosState = {
  path: string
  dirList: TData<'name'>[]
  fileList: TData<'name'>[]
  selected: string
  stat: {
    hsize: string
    size: number
    mtime: string
  }
  setPath: (path: string) => void
  setSelected: (name: string) => void
}

const fileManagerStoreBase = createStore<TPrecosState>()(
  devtools(
    (set, get) => ({
      path: '',
      dirList: [],
      fileList: [],
      selected: '',
      stat: {} as TPrecosState['stat'],
      setPath: (path) => {
        set(() => ({ path }), false, 'setPath')
      },
      setSelected: (name) => {
        set(() => ({ selected: name }), false, 'setSelected')
      },
    }),
    {
      name: 'intranet',
      store: tableName,
      serialize: { options: true },
    }
  )
)

export const precosStore = createSelectors(fileManagerStoreBase)

export type TPrecosStore = typeof precosStore
