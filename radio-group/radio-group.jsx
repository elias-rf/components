import { CheckIcon } from '@radix-ui/react-icons'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import * as React from 'react'

import { cn } from '../utils.mjs'

/**
 * @typedef {Object} RadioGroupProps
 * @extends {RadioGroupPrimitive.RootProps}
 * @property {any} [ref]
 * @property {boolean} [disabled]
 * @property {string} [className]
 * @property {string} [align]
 * @property {"default" | "sm" | "lg" | "icon"} [size]
 * @property {string} [asChild]
 * @property {(e:any)=>void} [onClick]
 */

/**
 * @type {React.FC<RadioGroupProps>}
 */
const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

/**
 * @typedef {Object} RadioGroupItemProps
 * @extends {RadioGroupPrimitive.RootProps}
 * @property {any} [ref]
 * @property {boolean} [disabled]
 * @property {string} [className]
 * @property {string} [align]
 * @property {"default" | "sm" | "lg" | "icon"} [size]
 * @property {string} [asChild]
 * @property {(e:any)=>void} [onClick]
 */

/**
 * @type {React.FC<RadioGroupItemProps>}
 */
const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'aspect-square h-4 w-4 rounded-full border border-slate-900 text-slate-900 shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-50 dark:text-slate-50 dark:focus-visible:ring-slate-300',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <CheckIcon className="fill-primary h-3.5 w-3.5" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
