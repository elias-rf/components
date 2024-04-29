import React from 'react'
import { useLocation } from 'wouter'
import { SpinnerIcon } from '../components/icons/spinner-icon.jsx'
import { authStore } from '../store/auth_store.mjs'

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
