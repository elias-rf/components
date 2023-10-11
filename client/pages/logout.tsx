import { SpinnerIcon } from '@/client/components/icons/spinner-icon'
import { useAuth } from '@/client/store/auth'
import React from 'react'
import { useLocation } from 'wouter'

/**
 * Componente para tela de login
 *
 * @returns {*} componente <LoginView />
 */
export function Logout() {
  const logout = useAuth((state) => state.logout)
  const [_, setLocation] = useLocation()

  React.useEffect(() => {
    logout()
    setLocation('/')
  }, [logout, setLocation])

  return (
    <div className={'flex justify-center'}>
      <SpinnerIcon />
    </div>
  )
}
