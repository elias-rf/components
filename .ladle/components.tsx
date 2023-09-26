/* eslint-disable react/prop-types */
import type { GlobalProvider } from '@ladle/react'
import { useEffect } from 'react'
import '@/client/index.css'

export const Provider: GlobalProvider = ({ children, globalState }) => {
  useEffect(() => {
    if (globalState.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [globalState.theme])
  return <div className="p-4">{children}</div>
}
