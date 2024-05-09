import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'

import { cn } from '../lib/utils.mjs'

/**
 * @typedef {Object} ToastViewportProps
 * @extends {React.HTMLAttributes<HTMLTableElement>}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<ToastViewportProps>}
 */
const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-slate-900/20 dark:bg-slate-50/20">
      <SliderPrimitive.Range className="absolute h-full bg-slate-900 dark:bg-slate-50" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block w-4 h-4 transition-colors bg-white border rounded-full shadow border-slate-200 border-slate-900/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-50/50 dark:border-slate-800 dark:bg-slate-950 dark:focus-visible:ring-slate-300" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
