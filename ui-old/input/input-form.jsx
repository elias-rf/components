import React from 'react'
import { cn } from '../../lib/utils.mjs'
import { themeInput } from '../../theme-input.mjs'

/**
 * @typedef {Object} ToastViewportProps
 * @extends {React.HTMLAttributes<HTMLTableElement>}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<ToastViewportProps>}
 */
export const InputForm = React.forwardRef(
  (
    {
      className,
      disabled = false,
      name,
      onBlur,
      onChange,
      type = 'text',
      variant,
    },
    ref
  ) => {
    return (
      <input
        className={cn(
          themeInput[variant || 'default'],
          'block h-8 w-full rounded-lg border px-1.5 text-sm',
          disabled ? themeInput.disabled : null,
          className
        )}
        disabled={disabled}
        id={name}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
        type={type}
      />
    )
  }
)
