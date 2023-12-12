import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/client/lib/rpc.js'
import { TCurrentUser } from '@/types/index.js'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { createStore } from 'zustand/vanilla'

interface AuthState {
  token: string
  user: TCurrentUser
  permissions: { [perm: string]: boolean }
  login: (user: any) => Promise<TCurrentUser>
  logout: () => void
  isAuthenticated: () => boolean
  fetchPermissions: () => void
  canList: (permissions: { [permission: string]: any }) => {
    [permission: string]: boolean
  }
  can: (permission: string) => boolean
}

export const authStoreBase = createStore<AuthState>()(
  persist(
    devtools(
      (set, get) => ({
        token: '',
        user: {},
        permissions: {},

        /**
         * Executa o login no servidor
         */
        login: async (user: any) => {
          const login = await rpc.request('usuario_login', user)
          if (login && login.usuario_id && login.usuario_id > 0) {
            set(() => ({ token: login.token, user: login }), false, 'login')
            await get().fetchPermissions()
          }
          return login
        },

        /**
         * Apaga as informações de login no cliente
         */
        logout: () => {
          set({ token: '', user: {}, permissions: {} }, false, 'logout')
        },

        /**
         * Retorna true se existe usuario logado
         */
        isAuthenticated: () => {
          return get().token !== ''
        },

        /**
         * Busca todas as permissoes do usuario
         */
        fetchPermissions: async () => {
          const groups = get().user.group_ids?.split(',')
          const permissions = await rpc.request('groupSubject_list', {
            select: ['idSubject'],
            where: [['idGroup', 'in', groups]],
          })
          set(
            () => ({
              permissions: permissions.reduce(
                (acc: any, cur: any) => ({ ...acc, [cur.idSubject]: true }),
                {}
              ),
            }),
            false,
            'fetchPermissions'
          )
        },
        /**
         * Retorna uma lista boolean para cada permission informada
         */
        canList: (permissions) => {
          const response = {} as { [permission: string]: any }
          const groups = get().user.group_ids?.split(',')
          Object.keys(permissions).forEach((permission) => {
            if (groups?.includes('0')) {
              response[permission] = true
            } else {
              response[permission] = get().permissions[permission] || false
            }
          })
          return response
        },

        /**
         * Retorna true se o usuario tem a permissão
         */
        can: (permission) => {
          const groups = get().user.group_ids?.split(',')
          let response = get().canList({ [permission]: false })[permission]
          if (groups?.includes('0')) {
            response = true
          }

          return response
        },
      }),
      { name: 'intranet', store: 'auth', serialize: { options: true } }
    ),
    {
      name: 'auth',
      partialize: (state) => ({ token: state.token, user: state.user }),
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)

export const authStore = createSelectors(authStoreBase)
export type TAuthStore = typeof authStore
