import { Helper } from '@/client/components/ui/helper'
import { Label } from '@/client/components/ui/label'
import { cn } from '@/client/lib/cn'
import React from 'react'

export type TCheckBoxProps = {
  disabled?: boolean
  helper?: string
  label?: string
  onChange?: (e: boolean) => void
  required?: boolean
  value?: boolean
  variant?: 'success' | 'error' | 'none'
}

export function CheckBox({
  label,
  value = false,
  helper = '',
  required = false,
  disabled = false,
  onChange,
  variant = 'none',
}: TCheckBoxProps) {
  const id = React.useId()
  function handleChange(e: any) {
    onChange && onChange(e.target.checked)
  }

  return (
    <>
      <div className={cn('flex')}>
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            id={id}
            checked={value}
            className={cn(
              'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600',
              disabled ? 'cursor-not-allowed' : 'cursor-pointer'
            )}
            disabled={disabled}
            onChange={handleChange}
          />
        </div>
        <div className="text-sm">
          <Label
            id={id}
            variant={variant}
            required={required}
            disabled={disabled}
          >
            {label}
          </Label>
          <Helper variant={variant}>{helper}</Helper>
        </div>
      </div>
    </>
  )
}
