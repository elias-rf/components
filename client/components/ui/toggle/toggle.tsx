import { cn } from '@/client/lib/cn.js'

export type TToggleProps = {
  className?: string
  disabled?: boolean
  id?: string
  name?: string
  onChange?: (value: boolean) => void
  onInput?: (value: any, name: any) => void
  value?: boolean
  variant?: 'success' | 'error'
}

export function Toggle({
  value = false,
  disabled = false,
  onChange,
  onInput,
  id,
  name,
  className,
}: TToggleProps) {
  function handleChange() {
    if (disabled) return
    onChange && onChange(!value)
    onInput && onInput(!value, name || '')
  }

  return (
    <div className="flex h-8 items-center">
      <div
        className={cn('relative inline-flex cursor-pointer items-center', {
          'cursor-not-allowed': disabled,
        })}
        onClick={handleChange}
      >
        <input
          type="checkbox"
          onChange={handleChange}
          className="peer sr-only"
          checked={value}
          disabled={disabled}
          id={id}
          name={name}
        />
        <div
          className={cn(
            "peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800",
            {
              'peer-checked:bg-gray-300 dark:peer-checked:bg-gray-500':
                disabled,
            },
            className
          )}
        ></div>
      </div>
    </div>
  )
}
