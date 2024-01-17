import { themeInput } from '@/client/components/ui-old/theme-input.js'
import { cn } from '@/client/lib/utils.js'
import React from 'react'

export type TCheckBoxProps = {
  disabled?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  value?: boolean
  variant?: 'success' | 'error'
  name?: string
}

export const CheckBoxForm = React.forwardRef<HTMLInputElement, TCheckBoxProps>(
  (
    { value = false, disabled = false, onChange, onBlur, variant, name = '' },
    ref
  ) => {
    return (
      <>
        <div className={cn('flex')}>
          <div className="flex h-8 items-center">
            <input
              type="checkbox"
              ref={ref}
              className={cn(
                themeInput[variant || 'default'],
                'h-6 w-6 rounded focus:ring-2 dark:ring-offset-gray-800',
                disabled ? themeInput.disabled : null
              )}
              disabled={disabled}
              onChange={onChange}
              onBlur={onBlur}
              name={name}
              id={name}
            />
          </div>
        </div>
      </>
    )
  }
)
