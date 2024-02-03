import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/client/lib/rpc.js'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const tableName = 'fileManager' as const

type TState = {
  path: string
  selected: string
}

const initialState: TState = {
  path: '',
  selected: '',
}

const state = createSelectors(create(devtools(() => initialState)))

const setPath = (path: string) => {
  state.setState({ path }, false, 'fileManager/setPath')
}

const setSelected = (name: string) => {
  state.setState({ selected: name }, false, 'fileManager/setSelected')
}

const fetchDir = async (path: string) => {
  const params = {
    path,
  }
  const list = await rpc.request('fileManager_dir', params)
  return list
}

const fetchStat = async (path: string, name: string) => {
  const params = {
    path,
    name,
  }
  const stat = await rpc.request('fileManager_stat', params)
  return stat
}

export const fileManagerStore = {
  state,
  setPath,
  setSelected,
  fetchDir,
  fetchStat,
}
