import { SelectOption } from '@/client/components/ui/select/select-option'
import { themeInput } from '@/client/components/ui/theme-input'
import { cn } from '@/client/lib/cn'

export type TSelectProps = {
  disabled?: boolean
  onBlur?: (e: any) => void
  onChange?: (value: string) => void
  value: string
  variant?: 'success' | 'error'
  id?: string
  className?: string
  children?: React.ReactNode
}

function Select({
  disabled = false,
  onBlur,
  onChange,
  value,
  variant,
  id,
  className,
  children,
}: TSelectProps) {
  function handleChange(e: any) {
    onChange && onChange(e.target.value)
  }

  return (
    <div className="w-full">
      <select
        id={id}
        disabled={disabled}
        value={value}
        onBlur={onBlur}
        onChange={handleChange}
        className={cn(
          themeInput[variant || 'default'],
          'h-8 border text-sm rounded-lg block w-full px-1.5',
          disabled ? themeInput.disabled : null,
          className
        )}
      >
        {children}
      </select>
    </div>
  )
}

Select.Option = SelectOption

export { Select }
