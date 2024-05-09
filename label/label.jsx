// @ts-check
import * as LabelPrimitive from '@radix-ui/react-label'
import { cva } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '../lib/utils.mjs'

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
)

/**
 * @typedef {Object} LabelProps
 * @extends {LabelPrimitive.RootProps}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<LabelProps>}
 */
const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
