import { cn } from '@/client/lib/utils.js'
import { ReactNode } from 'react'
import { ListGrupoItem } from './list-grupo-item.js'

function ListGrupo({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <ul
      className={cn(
        'bg-white text-sm font-medium text-gray-900 dark:bg-gray-700 dark:text-white',
        className
      )}
    >
      {children}
    </ul>
  )
}

ListGrupo.Item = ListGrupoItem

export { ListGrupo }
