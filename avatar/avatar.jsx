import { cn } from '../lib/utils.mjs'

function iniciais(nome) {
  if (!nome) return '?'
  const [primeiro, segundo] = nome.split(' ')
  if (!segundo)
    return primeiro.charAt(0).toUpperCase() + primeiro.charAt(1).toLowerCase()
  return primeiro.charAt(0).toUpperCase() + segundo.charAt(0).toUpperCase()
}

/**
 * @typedef {Object} AvatarProps
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<AvatarProps & React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>>}
 */
export const Avatar = ({ className, children }) => {
  const inicial = iniciais(children)
  return (
    <div
      className={cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
        className
      )}
    >
      {' '}
      <div
        className={cn(
          'flex h-full w-full items-center justify-center rounded-full bg-black/5 text-black/90 dark:bg-white/30 dark:text-white/80',
          className
        )}
      >
        {inicial}
      </div>
    </div>
  )
}
