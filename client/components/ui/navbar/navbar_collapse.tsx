import { ShowContext } from '@/client/components/ui/navbar/navbar_context'
import { cn } from '@/client/lib/cn'
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
      <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {children}
      </ul>
    </div>
  )
}
