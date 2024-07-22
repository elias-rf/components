import * as React from 'react'
import { cn } from '../lib/utils.mjs'
import * as AvatarPrimitive from '../radix/avatar/avatar.jsx'

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
export const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName
/* -------------------------------------------------------------------------- */
/**
 * @typedef {Object} AvatarImageProps
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<AvatarImageProps & React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>>}
 */
export const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName
/* -------------------------------------------------------------------------- */
/**
 * @typedef {Object} AvatarFallbackProps
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<AvatarFallbackProps & React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>>}
 */
export const AvatarFallback = React.forwardRef(
  ({ className, ...props }, ref) => {
    props.children = iniciais(props.children)
    return (
      <AvatarPrimitive.Fallback
        ref={ref}
        className={cn(
          'flex h-full w-full items-center justify-center rounded-full bg-black/5 text-black/90 dark:bg-white/30 dark:text-white/80',
          className
        )}
        {...props}
      />
    )
  }
)

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName
