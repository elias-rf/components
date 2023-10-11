import { Helper } from '@/client/components/ui/helper'
import { Label } from '@/client/components/ui/label'
import React from 'react'

export type TSelectProps = {
  disabled?: boolean
  helper?: string
  label?: string
  onBlur?: (e: any) => void
  onChange?: (value: string) => void
  options: [label: string, value: any][]
  required?: boolean
  value: string
  variant?: 'success' | 'error' | 'none'
}

export function Select({
  disabled = false,
  helper,
  label,
  onBlur,
  onChange,
  options,
  required = false,
  value,
  variant = 'none',
}: TSelectProps) {
  const id = React.useId()

  function handleChange(e: any) {
    onChange && onChange(e.target.value)
  }

  return (
    <div className="w-full">
      <Label
        id={id}
        required={required}
        disabled={disabled}
        variant={variant}
      >
        {label}
      </Label>
      <select
        id={id}
        disabled={disabled}
        value={value}
        onBlur={onBlur}
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
      <Helper variant={variant}>{helper}</Helper>
    </div>
  )
}
