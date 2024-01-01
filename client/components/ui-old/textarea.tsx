import { Helper } from '@/client/components/ui-old/helper.js'
import { Label } from '@/client/components/ui-old/label.js'
import { cn } from '@/client/lib/cn.js'
import React from 'react'

type TTextareaProps = {
  disabled?: boolean
  helper?: string
  label?: string
  onBlur?: (e: any) => void
  onChange?: (e: any) => void
  onKeyDown?: (e: any) => void
  required?: boolean
  rows?: number
  value: string
  variant?: 'success' | 'error' | 'none'
}

export function Textarea({
  disabled = false,
  helper = '',
  label,
  onBlur,
  onChange,
  onKeyDown,
  required = false,
  rows = 3,
  value,
  variant = 'none',
}: TTextareaProps) {
  const id = React.useId()

  function handleChange(e: any) {
    onChange && onChange(e.target.value)
  }

  return (
    <div>
      <Label
        name={id}
        required={required}
        disabled={disabled}
        variant={variant}
      >
        {label}
      </Label>
      <textarea
        rows={rows}
        className={cn(
          'block w-full rounded-lg border border-gray-300 bg-gray-50 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
          {
            'cursor-not-allowed bg-gray-100 text-gray-600 dark:text-gray-400':
              disabled,
          },
          {
            'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100':
              variant === 'success',
          },
          {
            'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100':
              variant === 'error',
          }
        )}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        disabled={disabled}
      />
      <Helper variant={variant}>{helper}</Helper>
    </div>
  )
}
