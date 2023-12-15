import { cache } from '@/client/lib/cache.js'
import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/client/lib/rpc.js'
import { TData } from '@/types/index.js'
import { devtools } from 'zustand/middleware'
import { createStore } from 'zustand/vanilla'

const tableName = 'fileManager' as const

type TFileManagerState = {
  path: string
  dirList: TData<'name'>[]
  fileList: TData<'name'>[]
  selected: string
  stat: {
    hsize: string
    size: number
    mtime: string
  }
  fetchDir: () => Promise<{
    dir: TData<'name'>[]
    file: TData<'name'>[]
  }>
  fetchStat: () => Promise<{
    hsize: string
    size: number
    mtime: string
  }>
  setPath: (path: string) => void
  setSelected: (name: string) => void
}

const fileManagerStoreBase = createStore<TFileManagerState>()(
  devtools(
    (set, get) => ({
      path: '',
      dirList: [],
      fileList: [],
      selected: '',
      stat: {} as TFileManagerState['stat'],
      setPath: (path) => {
        set(() => ({ path }), false, 'setPath')
      },
      setSelected: (name) => {
        set(() => ({ selected: name }), false, 'setSelected')
      },
      fetchDir: async () => {
        const list = (await cache.memo(
          {
            path: get().path,
            _table: tableName,
          },
          () =>
            rpc.request('fileManager_dir', {
              path: get().path,
            })
        )) as {
          dir: TData<'name'>[]
          file: TData<'name'>[]
        }
        set(
          () => ({ dirList: list.dir, fileList: list.file }),
          false,
          'fetchList'
        )
        return list
      },
      fetchStat: async () => {
        const stat = (await cache.memo(
          {
            path: get().path,
            name: get().selected,
            _table: tableName,
          },
          () =>
            rpc.request('fileManager_stat', {
              path: get().path,
              name: get().selected,
            })
        )) as {
          hsize: string
          size: number
          mtime: string
        }
        set(() => ({ stat }), false, 'fetchList')
        return stat
      },
    }),
    {
      name: 'intranet',
      store: tableName,
      serialize: { options: true },
    }
  )
)

export const fileManagerStore = createSelectors(fileManagerStoreBase)
