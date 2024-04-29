import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createSelectors } from '../../../../lib/create-selectors.mjs'
import { rpc } from '../../../../lib/rpc.mjs'

const tableName = 'fileManager'

const initialState = {
  path: '',
  selected: '',
}

const state = createSelectors(create(devtools(() => initialState)))

const setPath = (path) => {
  state.setState({ path }, false, 'fileManager/setPath')
}

const setSelected = (name) => {
  state.setState({ selected: name }, false, 'fileManager/setSelected')
}

const fetchDir = async (path) => {
  const params = {
    path,
  }
  const list = await rpc.request('fileManager_dir', params)
  return list
}

const fetchStat = async (path, name) => {
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
