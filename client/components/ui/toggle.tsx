import { Helper } from '@/client/components/ui/helper'
import { Label } from '@/client/components/ui/label'
import React from 'react'

export type TToggleProps = {
  disabled?: boolean
  helper?: string
  label?: string
  onChange?: (e: boolean) => void
  required?: boolean
  value?: boolean
  variant?: 'success' | 'error' | 'none'
}

export function Toggle({
  label,
  value = false,
  helper = '',
  required = false,
  disabled = false,
  onChange,
  variant = 'none',
}: TToggleProps) {
  const id = React.useId()
  function handleChange() {
    onChange && onChange(!value)
  }

  return (
    <>
      <div>
        <Label
          id={id}
          variant={variant}
          required={required}
          disabled={disabled}
        >
          {label}
        </Label>
        <div
          className="relative inline-flex items-center mt-1 cursor-pointer"
          onClick={handleChange}
        >
          <input
            type="checkbox"
            onChange={handleChange}
            className="sr-only peer"
            checked={value}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </div>
        <Helper variant={variant}>{helper}</Helper>
      </div>
    </>
  )
}
