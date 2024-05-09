import { cn } from '../lib/utils.mjs'

/**
 * @typedef {Object} ListGrupoProps
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<ListGrupoProps>}
 */
export const ListGrupo = ({ children, className }) => {
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
