import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { createSelectors } from '../lib/create-selectors.mjs'
import { rpc } from '../lib/rpc.mjs'
import { globalPlugin } from '../store/global_plugin.mjs'

let initialState = {
  token: '',
  currentUser: {},
}

const state = createSelectors(
  create(
    persist(
      devtools(() => initialState),
      {
        name: 'auth',
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
)

/**
 * Executa o login no servidor e salva as informações do usuario no cliente
 */
const login = async (userName, password) => {
  const login = await rpc.request('usuario_login', { userName, password })

  if (login && login.id && login.id > 0) {
    state.setState(
      { token: login.token || '', currentUser: login },
      false,
      'auth/login'
    )
  }
  return login
}

/**
 * Apaga as informações de login no cliente
 */
const logout = () => {
  state.setState({ token: '', currentUser: {} }, false, 'auth/logout')
}

/**
 * Retorna true se existe usuario logado
 */
const isAuthenticated = () => {
  return state.getState().token !== ''
}

/**
 * Busca todas as permissoes do usuario
 */
const fetchPermissions = async (group_ids) => {
  const groups = group_ids?.split(',').map((item) => item.toString())

  const permissions = await rpc.request('grupoSujeito_list', {
    select: ['sujeitoId'],
    where: [['grupoId', 'in', groups]],
  })

  const response = permissions.reduce(
    (acc, cur) => ({ ...acc, [cur.idSubject]: true }),
    {}
  )
  return response
}

/**
 * Retorna uma lista boolean para cada permission informada
 */
const canList = async (group_ids, permissions) => {
  const response = {}
  const permissionsList = await fetchPermissions(group_ids)
  const groups = group_ids.split(',')
  permissions.forEach((permission) => {
    if (groups?.includes('0')) {
      response[permission] = true
    } else {
      response[permission] = permissionsList[permission] || false
    }
  })
  return response
}

/**
 * Retorna true se o usuario tem a permissão
 */
const can = async (group_ids, permission) => {
  const groups = group_ids.split(',')
  if (groups?.includes('0')) {
    return true
  }
  let response = await canList(group_ids, [permission])
  return response[permission]
}

/**
 * Retorna o usuario logado
 */
const me = async () => {
  const user = await rpc.request('usuario_me')
  if (!user) {
    logout()
  }
  return user
}

globalPlugin(state, 'token')
globalPlugin(state, 'user')
globalPlugin(state, 'permissions')

export const authStore = {
  state,
  login,
  logout,
  isAuthenticated,
  fetchPermissions,
  can,
  me,
  canList,
}
