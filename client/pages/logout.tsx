import { SpinnerIcon } from '@/client/components/icons/spinner-icon'
import { authStore } from '@/client/store/auth_store'
import React from 'react'
import { useLocation } from 'wouter'

/**
 * Componente para tela de login
 *
 * @returns {*} componente <LoginView />
 */
export function Logout() {
  // const logout = useAuth((state) => state.logout)
  const [_, setLocation] = useLocation()
  const logout = authStore.use.logout()

  React.useEffect(() => {
    logout()
    setLocation('/')
  }, [setLocation, logout])

  return (
    <div className={'flex justify-center'}>
      <SpinnerIcon />
    </div>
  )
}
