import { ReactNode } from 'react'

type TFormField = {
  children: ReactNode
  className?: string
}

export function FormField({ children, className }: TFormField) {
  return <div className={className}>{children}</div>
}
