import React from 'react'

import Page403 from '../pages/page_403'

interface TCanProps {
  children: React.ReactNode
  can?: boolean
  response?: any
}

export function Can({ children, can, response }: TCanProps) {
  if (can) return <>{children}</>
  if (response !== undefined) return <>{response}</>
  return <Page403 />
}
