import { TData } from '@/types/index.js'
import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'

const tableName = 'precos' as const

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

export const precosStore = {
  state,
  setPath,
  setSelected,
}

export type TPrecosStore = typeof precosStore
