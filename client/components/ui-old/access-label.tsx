import { ReactNode } from 'react'

type TAccessLabel = {
  accessKey?: string
  children: ReactNode
}

export function AccessLabel({ children }: TAccessLabel) {
  return <span>{children}</span>
}
