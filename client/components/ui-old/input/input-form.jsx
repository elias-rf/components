import React from 'react'
import { themeInput } from '../../../components/ui-old/theme-input.mjs'
import { cn } from '../../../lib/utils.mjs'

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
