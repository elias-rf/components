import { cn } from '@/client/lib/cn.js'
import { ReactNode } from 'react'

export function NavbarMenu({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        'flex flex-row items-center space-x-2 flex-nowrap md:order-2'
      )}
    >
      {children}
    </div>
  )
}
