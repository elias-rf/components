import { cn } from '../lib/utils.mjs'

/**
 * @typedef {Object} ListGrupoItemProps
 * @property {string} [className]
 * @property {boolean} [active]
 * @property {(e:any)=>void} [onClick]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<ListGrupoItemProps>}
 */
export const ListGrupoItem = ({ children, onClick, className, active }) => {
  return (
    <li
      onClick={onClick}
      className={cn(
        'w-full cursor-pointer border border-gray-200 px-2 py-1 first:rounded-t-lg last:rounded-b-lg dark:border-gray-600',
        { 'bg-blue-700 text-white dark:bg-gray-800': active },
        className
      )}
    >
      {children}
    </li>
  )
}
