import { cn } from '@/client/lib/cn.js'
import React from 'react'

export type TToggleProps = {
  className?: string
  disabled?: boolean
  name?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  variant?: 'success' | 'error'
}

export const ToggleForm = React.forwardRef<HTMLInputElement, TToggleProps>(
  ({ className, disabled = false, name, onBlur, onChange }, ref) => {
    return (
      <>
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            ref={ref}
            onBlur={onBlur}
            onChange={onChange}
            name={name}
            id={name}
          />
          <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
        </label>
      </>
    )
  }
)