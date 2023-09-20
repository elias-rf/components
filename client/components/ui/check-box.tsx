import { cn } from '@/client/lib/cn'
import React from 'react'

type ToggleProps = {
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
}: ToggleProps) {
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
        <div className="ml-2 text-sm">
          {label ? (
            <label
              htmlFor={id}
              className={cn(
                'text-sm font-medium text-gray-900 dark:text-gray-300',
                { 'text-gray-400 dark:text-gray-500': disabled },
                { 'text-green-700 dark:text-green-500': variant === 'success' },
                { 'text-red-700 dark:text-red-500': variant === 'error' }
              )}
            >
              {label} {required ? '*' : null}
            </label>
          ) : null}

          <p
            className={cn(
              'text-xs text-gray-500 dark:text-gray-400',
              { 'text-green-600 dark:text-green-500': variant === 'success' },
              { 'text-red-600 dark:text-red-500': variant === 'error' }
            )}
          >
            {helper}
          </p>
        </div>
      </div>
    </>
  )
}
