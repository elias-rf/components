import { authStorage } from '@/client/lib/auth-storage.js'
import { rpc } from '@/client/lib/rpc.js'
import { globalPlugin } from '@/client/store/global_plugin.js'
import { TCurrentUser } from '@/types/index.js'
import { proxy, subscribe } from 'valtio'

type TAuthState = {
  token: string
  user: TCurrentUser
  permissions: { [perm: string]: boolean }
}

const storage = authStorage.getItem()
const initialState = storage ? JSON.parse(storage) : null

const state = proxy<TAuthState>(
  initialState || {
    token: '',
    user: {} as TCurrentUser,
    permissions: {} as { [perm: string]: boolean },
  }
)

/**
 * Executa o login no servidor
 */
const login = async (user: { user: string; password: string }) => {
  const login = await rpc.request('usuario_login', user)
  if (login && login.usuario_id && login.usuario_id > 0) {
    state.token = login.token || ''
    state.user = login
    await fetchPermissions()
  }
  return login
}

/**
 * Apaga as informações de login no cliente
 */
const logout = () => {
  state.token = ''
  state.user = {}
  state.permissions = {}
}

/**
 * Retorna true se existe usuario logado
 */
const isAuthenticated = () => {
  return state.token !== ''
}

/**
 * Busca todas as permissoes do usuario
 */
const fetchPermissions = async () => {
  const groups = state.user.group_ids?.split(',')
  const permissions = await rpc.request('groupSubject_list', {
    select: ['idSubject'],
    where: [['idGroup', 'in', groups]],
  })
  const response = permissions.reduce(
    (acc: any, cur: any) => ({ ...acc, [cur.idSubject]: true }),
    {}
  )
  state.permissions = response
  return response
}

/**
 * Retorna uma lista boolean para cada permission informada
 */
const canList = (permissions: { [permission: string]: any }) => {
  const response = {} as { [permission: string]: any }
  const groups = state.user.group_ids?.split(',')
  Object.keys(permissions).forEach((permission) => {
    if (groups?.includes('0')) {
      response[permission] = true
    } else {
      response[permission] = state.permissions[permission] || false
    }
  })
  return response
}

/**
 * Retorna true se o usuario tem a permissão
 */
const can = (permission: string) => {
  const groups = state.user.group_ids?.split(',')
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

subscribe(state, () => {
  authStorage.setItem(JSON.stringify(state))
})

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
