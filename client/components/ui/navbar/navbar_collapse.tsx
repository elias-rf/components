import { ShowContext } from '@/client/components/ui/navbar/navbar_context.js'
import { cn } from '@/client/lib/cn.js'
import { ReactNode, useContext } from 'react'

export function NavbarCollapse({ children }: { children: ReactNode }) {
  const { show } = useContext(ShowContext)

  return (
    <div
      className={cn('w-full md:block md:w-auto', {
        hidden: !show,
      })}
      id="navbar-default"
    >
      <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 md:dark:bg-gray-900">
        {children}
      </ul>
    </div>
  )
}
