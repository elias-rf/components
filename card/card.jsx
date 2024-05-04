import { cn } from '../utils.mjs'
import * as React from 'react'

/**
 * @typedef {Object} CardProps
 * @extends {React.HTMLAttributes<HTMLDivElement>}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<CardProps>}
 */
export const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border border-slate-200 bg-white text-slate-950 shadow dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50',
      className
    )}
    {...props}
  />
))
Card.displayName = 'Card'

/**
 * @typedef {Object} CardHeaderProps
 * @extends {React.HTMLAttributes<HTMLDivElement>}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<CardHeaderProps>}
 */
export const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

/**
 * @typedef {Object} CardTitleProps
 * @extends {React.HTMLAttributes<HTMLDivElement>}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<CardTitleProps>}
 */
export const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('font-semibold leading-none tracking-tight', className)}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

/**
 * @typedef {Object} CardDescriptionProps
 * @extends {React.HTMLAttributes<HTMLDivElement>}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<CardDescriptionProps>}
 */
export const CardDescription = React.forwardRef(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-slate-500 dark:text-slate-400', className)}
      {...props}
    />
  )
)
CardDescription.displayName = 'CardDescription'

/**
 * @typedef {Object} CardContentProps
 * @extends {React.HTMLAttributes<HTMLDivElement>}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<CardContentProps>}
 */
export const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

/**
 * @typedef {Object} CardFooterProps
 * @extends {React.HTMLAttributes<HTMLDivElement>}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<CardFooterProps>}
 */
export const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'
