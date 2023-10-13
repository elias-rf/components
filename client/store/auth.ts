import { TCurrentUser } from '@/types'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface AuthState {
  token: string
  user: TCurrentUser
  // login: (user: any) => void
  // logout: () => void
  // isAuthenticated: () => boolean
}

export const useAuth = create<AuthState>()(
  persist(
    () => ({
      token: '',
      user: {},
      // login: (user: any) => set(() => ({ token: user.token, user })),
      // logout: () => set({ token: '', user: {} }),
      // isAuthenticated: () => get().token !== '',
    }),
    { name: 'auth', storage: createJSONStorage(() => sessionStorage) }
  )
)

export function login(user: TCurrentUser) {
  useAuth.setState(() => ({ token: user.token, user }))
}

export function logout() {
  useAuth.setState(() => ({ token: '', user: {} }))
}

export function isAuthenticated() {
  return useAuth.getState().token !== ''
}
