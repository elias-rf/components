import * as AvatarPrimitive from '../radix/avatar/avatar.jsx'
import * as React from 'react'
import { cn } from '../utils.mjs'

/**
 * @typedef {Object} AvatarProps
 * @extends {AvatarPrimitive.AvatarProps}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<AvatarProps>}
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

/**
 * @typedef {Object} AvatarImageProps
 * @extends {AvatarPrimitive.AvatarProps}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<AvatarImageProps>}
 */
export const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

/**
 * @typedef {Object} AvatarFallbackProps
 * @extends {AvatarPrimitive.AvatarProps}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<AvatarFallbackProps>}
 */
export const AvatarFallback = React.forwardRef(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800',
        className
      )}
      {...props}
    />
  )
)
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName
