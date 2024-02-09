import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/client/lib/rpc.js'
import { globalPlugin } from '@/client/store/global_plugin.js'
import { TCurrentUser } from '@/types/index.js'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

type TAuthState = {
  token: string
  currentUser: TCurrentUser
}

let initialState: TAuthState = {
  token: '',
  currentUser: {} as TCurrentUser,
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
const login = async (
  userName: string,
  password: string
): Promise<TCurrentUser> => {
  const login = await rpc.request('usuario_login', { userName, password })

  if (login && login.usuario_id && login.usuario_id > 0) {
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
const logout = (): void => {
  state.setState({ token: '', currentUser: {} }, false, 'auth/logout')
}

/**
 * Retorna true se existe usuario logado
 */
const isAuthenticated = (): boolean => {
  return state.getState().token !== ''
}

/**
 * Busca todas as permissoes do usuario
 */
const fetchPermissions = async (
  group_ids: string
): Promise<{ [permission: string]: boolean }> => {
  const groups = group_ids?.split(',').map((item) => item.toString())

  const permissions = await rpc.request('groupSubject_list', {
    select: ['idSubject'],
    where: [['idGroup', 'in', groups]],
  })

  const response: { [permission: string]: boolean } = permissions.reduce(
    (acc: any, cur: any) => ({ ...acc, [cur.idSubject]: true }),
    {}
  )
  return response
}

/**
 * Retorna uma lista boolean para cada permission informada
 */
const canList = async (
  group_ids: string,
  permissions: string[]
): Promise<{ [permission: string]: boolean }> => {
  const response = {} as { [permission: string]: any }
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
const can = async (group_ids: string, permission: string): Promise<boolean> => {
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
const me = async (): Promise<TCurrentUser> => {
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
