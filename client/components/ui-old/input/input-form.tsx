import { themeInput } from '@/client/components/ui-old/theme-input.js'
import { cn } from '@/client/lib/utils.js'
import React from 'react'

type TInputProps = {
  className?: string
  disabled?: boolean
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  type?: string
  variant?: 'success' | 'error'
}

export const InputForm = React.forwardRef<HTMLInputElement, TInputProps>(
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
