/* eslint-disable react/prop-types */
import '@/client/index.css'
import type { GlobalProvider } from '@ladle/react'
import { StrictMode, useEffect } from 'react'

export const Provider: GlobalProvider = ({ children, globalState }) => {
  useEffect(() => {
    if (globalState.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [globalState.theme])
  return (
    <StrictMode>
      <div className="p-4">{children}</div>
    </StrictMode>
  )
}
