import { themeInput } from '@/client/components/ui/theme-input.js'
import { cn } from '@/client/lib/cn.js'
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
      onChange,
      onBlur,
      type = 'text',
      variant,
    },
    ref
  ) => {
    return (
      <input
        type={type}
        id={name}
        name={name}
        className={cn(
          themeInput[variant || 'default'],
          'block h-8 w-full rounded-lg border px-1.5 text-sm',
          disabled ? themeInput.disabled : null,
          className
        )}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        ref={ref}
      />
    )
  }
)
