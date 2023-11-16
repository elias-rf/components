import { useInput } from '@/client/components/ui/input/use-input'
import { themeInput } from '@/client/components/ui/theme-input'
import { cn } from '@/client/lib/cn'
import React from 'react'

type TInputProps = {
  className?: string
  disabled?: boolean
  id?: string
  name?: string
  onChange?: (value: string) => void
  onInput?: (value: any, name: any) => void
  type?: string
  value?: string | number
  variant?: 'success' | 'error'
}

export const Input = React.forwardRef<HTMLInputElement, TInputProps>(
  (
    {
      className,
      disabled = false,
      name,
      onChange,
      onInput,
      type = 'text',
      value,
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
          'px-1.5 h-8 border text-sm rounded-lg block w-full',
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

Input.displayName = 'Input'
