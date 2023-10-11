import { TCurrentUser } from '@/types'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface AuthState {
  token: string
  user: TCurrentUser
  login: (user: any) => void
  logout: () => void
  isAuthenticated: () => boolean
}

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      token: '',
      user: {},
      login: (user: any) => set(() => ({ token: user.token, user })),
      logout: () => set({ token: '', user: {} }),
      isAuthenticated: () => get().token !== '',
    }),
    { name: 'auth', storage: createJSONStorage(() => sessionStorage) }
  )
)
