import { cn } from '@/client/lib/cn'
import React from 'react'

type SelectProps = {
  disabled?: boolean
  helper?: string
  label?: string
  onChange?: (e: string) => void
  options: [string, any][]
  required?: boolean
  value: string
  variant?: 'success' | 'error' | 'none'
}

export function Select({
  disabled = false,
  helper,
  label,
  onChange,
  options,
  required = false,
  value,
  variant = 'none',
}: SelectProps) {
  const id = React.useId()

  function handleChange(e: any) {
    onChange && onChange(e.target.value)
  }

  return (
    <>
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
      <select
        id={id}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options.map((option) => {
          const [lbl, vlr] = option
          return (
            <option
              key={vlr}
              value={vlr}
            >
              {lbl}
            </option>
          )
        })}
      </select>
      <p
        className={cn(
          'pt-1 text-xs text-gray-500 dark:text-gray-400',
          { 'text-green-600 dark:text-green-500': variant === 'success' },
          { 'text-red-600 dark:text-red-500': variant === 'error' }
        )}
      >
        {helper}
      </p>
    </>
  )
}
