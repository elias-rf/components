import { cva } from 'class-variance-authority'
import PropTypes from 'prop-types'
import * as React from 'react'
import { cn } from '../lib/utils.mjs'

const alertVariants = cva(
  'relative w-full rounded-lg border border-slate-200 px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-slate-950 [&>svg~*]:pl-7 dark:border-slate-800 dark:[&>svg]:text-slate-50',
  {
    variants: {
      variant: {
        default: 'bg-black/5 text-black/90 dark:bg-white/30 dark:text-white/80',
        destructive:
          'border-red-500/50 text-red-500 dark:border-red-500 [&>svg]:text-red-500  dark:text-red-100 dark:[&>svg]:text-red-100 dark:bg-red-50/30 bg-red-50/50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

/**
 * @typedef {Object} AlertProps
 * @property {any} [ref]
 * @property {string} [className]
 * @property {"default" | "destructive"} [variant]
 * @property {any} children
 */

/**
 * @type {React.FC<AlertProps>}
 */
const Alert = React.forwardRef(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'destructive']),
}
Alert.displayName = 'Alert'

/**
 * @typedef {Object} AlertTitleProps
 * @property {any} [ref]
 * @property {string} [className]
 * @property {any} children
 */

/**
 * @type {React.FC<AlertTitleProps>}
 */
const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
))
AlertTitle.propTypes = {
  className: PropTypes.string,
}
AlertTitle.displayName = 'AlertTitle'

/**
 * @typedef {Object} AlertDescriptionProps
 * @property {any} [ref]
 * @property {string} [className]
 * @property {any} children
 */

/**
 * @type {React.FC<AlertDescriptionProps>}
 */
const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
))
AlertDescription.propTypes = {
  className: PropTypes.string,
}
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertDescription, AlertTitle }
