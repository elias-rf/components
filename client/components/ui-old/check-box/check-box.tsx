import { themeInput } from '@/client/components/ui-old/theme-input.js'
import { cn } from '@/client/lib/cn.js'

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
        <div className="flex h-8 items-center">
          <input
            type="checkbox"
            id={id}
            checked={value}
            className={cn(
              themeInput[variant || 'default'],
              'h-6 w-6 rounded focus:ring-2 dark:ring-offset-gray-800',
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
