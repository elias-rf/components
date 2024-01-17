import { cache } from '@/client/lib/cache.js'
import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/client/lib/rpc.js'
import { TData } from '@/types/index.js'
import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'

const tableName = 'fileManager' as const

type TState = {
  path: string
  dirList: TData<'name'>[]
  fileList: TData<'name'>[]
  selected: string
  stat: {
    hsize: string
    size: number
    mtime: string
  }
}

const initialState: TState = {
  path: '',
  dirList: [],
  fileList: [],
  selected: '',
  stat: {} as TState['stat'],
}

const state = proxy(initialState)
devtools(state, { name: tableName, enabled: true })

const setPath = (path: string) => {
  state.path = path
}

const setSelected = (name: string) => {
  state.selected = name
}

const fetchDir = async () => {
  const list = (await cache.memo(
    {
      path: state.path,
      _table: tableName,
    },
    () =>
      rpc.request('fileManager_dir', {
        path: state.path,
      })
  )) as {
    dir: TData<'name'>[]
    file: TData<'name'>[]
  }
  state.dirList = list.dir
  state.fileList = list.file
  return list
}

const fetchStat = async () => {
  const stat = (await cache.memo(
    {
      path: state.path,
      name: state.selected,
      _table: tableName,
    },
    () =>
      rpc.request('fileManager_stat', {
        path: state.path,
        name: state.selected,
      })
  )) as {
    hsize: string
    size: number
    mtime: string
  }
  state.stat = stat
  return stat
}

export const fileManagerStore = {
  state,
  setPath,
  setSelected,
  fetchDir,
  fetchStat,
}
