import React from 'react'
import { useInput } from '../../../components/ui-old/input/use-input.mjs'
import { themeInput } from '../../../components/ui-old/theme-input.mjs'
import { cn } from '../../../lib/utils.mjs'

export const Input = React.forwardRef(
  (
    {
      className,
      disabled = false,
      name,
      onChange,
      onInput,
      type = 'text',
      value = '',
      variant,
      id,
    },
    ref
  ) => {
    const ip = useInput({ value, onInput, onChange })

    return (
      <input
        type={type}
        id={id}
        name={name}
        className={cn(
          themeInput[variant || 'default'],
          'block h-8 w-full rounded-lg border px-1.5 text-sm',
          disabled ? themeInput.disabled : null,
          className
        )}
        value={ip.value}
        onChange={ip.handleChange}
        onBlur={ip.handleBlur}
        onKeyDown={ip.handleKeyDown}
        disabled={disabled}
        ref={ref}
      />
    )
  }
)
