// import { authStorage } from '@/client/lib/auth-storage.js'
import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/client/lib/rpc.js'
import { globalPlugin } from '@/client/store/global_plugin.js'
import { TCurrentUser } from '@/types/index.js'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

type TAuthState = {
  token: string
  user: TCurrentUser
  permissions: { [perm: string]: boolean }
}

let initialState: TAuthState = {
  token: '',
  user: {} as TCurrentUser,
  permissions: {} as { [perm: string]: boolean },
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
 * Executa o login no servidor
 */
const login = async (user: { user: string; password: string }) => {
  const login = await rpc.request('usuario_login', user)

  if (login && login.usuario_id && login.usuario_id > 0) {
    state.setState(
      { token: login.token || '', user: login },
      false,
      'auth/login'
    )
    await fetchPermissions()
  }
  return login
}

/**
 * Apaga as informações de login no cliente
 */
const logout = () => {
  state.setState({ token: '', user: {}, permissions: {} }, false, 'auth/logout')
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
const fetchPermissions = async () => {
  const groups = state
    .getState()
    .user.group_ids?.split(',')
    .map((item) => item.toString())

  const permissions = await rpc.request('groupSubject_list', {
    select: ['idSubject'],
    where: [['idGroup', 'in', groups]],
  })

  const response = permissions.reduce(
    (acc: any, cur: any) => ({ ...acc, [cur.idSubject]: true }),
    {}
  )
  state.setState({ permissions: response }, false, 'auth/fetchPermissions')
  return response
}

/**
 * Retorna uma lista boolean para cada permission informada
 */
const canList = (permissions: { [permission: string]: any }) => {
  const response = {} as { [permission: string]: any }
  const groups = state.getState().user.group_ids?.split(',')
  Object.keys(permissions).forEach((permission) => {
    if (groups?.includes('0')) {
      response[permission] = true
    } else {
      response[permission] = state.getState().permissions[permission] || false
    }
  })
  return response
}

/**
 * Retorna true se o usuario tem a permissão
 */
const can = (permission: string) => {
  const groups = state.getState().user.group_ids?.split(',')
  let response = canList({ [permission]: false })[permission]
  if (groups?.includes('0')) {
    response = true
  }

  return response
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
