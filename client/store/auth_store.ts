import { rpc } from '@/client/lib/rpc.js'
import { TCurrentUser } from '@/types/index.js'
import { proxy, subscribe } from 'valtio'
import { subscribeKey } from 'valtio/utils'

type TAuthState = {
  token: string
  user: TCurrentUser
  permissions: { [perm: string]: boolean }
}

const storage = sessionStorage.getItem('auth')
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
  state.permissions = permissions.reduce(
    (acc: any, cur: any) => ({ ...acc, [cur.idSubject]: true }),
    {}
  )
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

const me = async () => {
  const user = await rpc.request('usuario_me')
  if (!user) {
    logout()
  }
  return user
}

me()

subscribe(state, () => {
  sessionStorage.setItem('auth', JSON.stringify(state))
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
  subscribeKey,
  subscribe,
  proxy,
}
