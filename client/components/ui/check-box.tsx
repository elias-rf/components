import { themeInput } from '@/client/components/ui/theme-input'
import { cn } from '@/client/lib/cn'

export type TCheckBoxProps = {
  disabled?: boolean
  onChange?: (value: boolean) => void
  onInput?: (value: boolean, name: string) => void
  value?: boolean
  variant?: 'success' | 'error'
  id?: string
  name?: string
}

export function CheckBox({
  value = false,
  disabled = false,
  onChange,
  onInput,
  variant,
  id,
  name = '',
}: TCheckBoxProps) {
  function handleChange(e: any) {
    onChange && onChange(e.target.checked)
    onInput && onInput(e.target.checked, name)
  }

  return (
    <>
      <div className={cn('flex')}>
        <div className="flex items-center h-8">
          <input
            type="checkbox"
            id={id}
            checked={value}
            className={cn(
              themeInput[variant || 'default'],
              'w-6 h-6 rounded dark:ring-offset-gray-800 focus:ring-2',
              disabled ? themeInput.disabled : null
            )}
            disabled={disabled}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  )
}
