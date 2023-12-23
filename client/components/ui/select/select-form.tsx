import { SelectOption } from '@/client/components/ui/select/select-option.js'
import { themeInput } from '@/client/components/ui/theme-input.js'
import { cn } from '@/client/lib/cn.js'
import React from 'react'

export type TSelectProps = {
  disabled?: boolean
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  onBlur: (event: React.FocusEvent<HTMLSelectElement>) => void
  variant?: 'success' | 'error'
  id?: string
  name?: string
  className?: string
  children?: React.ReactNode
}

const SelectForm: React.ForwardRefExoticComponent<
  TSelectProps & React.RefAttributes<HTMLSelectElement>
> & { Option?: typeof SelectOption } = React.forwardRef<
  HTMLSelectElement,
  TSelectProps
>(
  (
    { disabled = false, onBlur, onChange, variant, name, className, children },
    ref
  ) => {
    return (
      <div className="w-full">
        <select
          ref={ref}
          id={name}
          name={name}
          disabled={disabled}
          onBlur={onBlur}
          onChange={onChange}
          className={cn(
            themeInput[variant || 'default'],
            'block h-8 w-full rounded-lg border px-1.5 text-sm',
            disabled ? themeInput.disabled : null,
            className
          )}
        >
          {children}
        </select>
      </div>
    )
  }
)

SelectForm.Option = SelectOption

export { SelectForm }
