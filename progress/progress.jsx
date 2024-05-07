// @ts-nocheck
import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as React from 'react'

import { cn } from '../utils.mjs'

/**
 * @typedef {Object} ProgressProps
 * @extends {ProgressPrimitive.RootProps}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<ProgressProps>}
 */
export const Progress = React.forwardRef(
  ({ className, value, ...props }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        'relative h-2 w-full overflow-hidden rounded-full bg-slate-900/20 dark:bg-slate-50/20',
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="flex-1 w-full h-full transition-all bg-slate-900 dark:bg-slate-50"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
)
Progress.displayName = ProgressPrimitive.Root.displayName
