import { cn } from '../../lib/utils.mjs'
import { ListGrupoItem } from './list-grupo-item.jsx'

function ListGrupo({ children, className }) {
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
