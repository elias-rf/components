import { SpinnerIcon } from '@/client/components/icons/spinner-icon.js'
import { authStore } from '@/client/store/auth_store.js'
import React from 'react'
import { useLocation } from 'wouter'

/**
 * Componente para tela de login
 *
 * @returns {*} componente <LoginView />
 */
export function Logout() {
  const [_, setLocation] = useLocation()

  React.useEffect(() => {
    authStore.logout()
    setLocation('/')
  }, [setLocation, authStore.logout])

  return (
    <div className={'flex justify-center'}>
      <SpinnerIcon />
    </div>
  )
}
