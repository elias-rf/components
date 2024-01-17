import { cn } from '@/client/lib/utils.js'
import { ReactNode } from 'react'

export function NavbarMenu({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        'flex flex-row flex-nowrap items-center space-x-2 md:order-2'
      )}
    >
      {children}
    </div>
  )
}
