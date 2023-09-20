import { cn } from '@/client/lib/cn'
import React from 'react'

type TInputProps = {
  label?: string
  helper?: string
  onChange?: (e: string) => void
  onBlur?: (e: any) => void
  onKeyDown?: (e: any) => void
  value?: string
  type?: string
  required?: boolean
  disabled?: boolean
  variant?: 'success' | 'error'
}

export function Input({
  label,
  value,
  type = 'text',
  helper = '',
  required = false,
  disabled = false,
  onChange,
  onBlur,
  onKeyDown,
  variant,
}: TInputProps) {
  const id = React.useId()

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange && onChange(e.currentTarget.value)
  }

  const handleBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    onBlur && onBlur(e.currentTarget.value)
  }

  return (
    <div>
      {label ? (
        <label
          htmlFor={id}
          className={cn(
            'block text-sm font-medium text-gray-900 dark:text-white',
            { 'text-gray-400 dark:text-gray-500': disabled },
            { 'text-green-700 dark:text-green-500': variant === 'success' },
            { 'text-red-700 dark:text-red-500': variant === 'error' }
          )}
        >
          {label} {required ? '*' : null}
        </label>
      ) : null}
      <input
        type={type}
        id={id}
        className={cn(
          'p-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
          {
            'text-gray-600 bg-gray-100 cursor-not-allowed dark:text-gray-400':
              disabled,
          },
          {
            'bg-green-50 border-green-500 text-green-900 placeholder-green-700 focus:ring-green-500 focus:border-green-500 dark:bg-green-100 dark:border-green-400':
              variant === 'success',
          },
          {
            'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400':
              variant === 'error',
          }
        )}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={onKeyDown}
        disabled={disabled}
      />
      <p
        className={cn(
          'pt-1 text-xs text-gray-500 dark:text-gray-400',
          { 'text-green-600 dark:text-green-500': variant === 'success' },
          { 'text-red-600 dark:text-red-500': variant === 'error' }
        )}
      >
        {helper}
      </p>
    </div>
  )
}
