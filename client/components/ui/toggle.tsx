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
    <div className="flex items-center h-8">
      <div
        className={cn('relative inline-flex items-center cursor-pointer', {
          'cursor-not-allowed': disabled,
        })}
        onClick={handleChange}
      >
        <input
          type="checkbox"
          onChange={handleChange}
          className="sr-only peer"
          checked={value}
          disabled={disabled}
          id={id}
          name={name}
        />
        <div
          className={cn(
            "w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600",
            {
              'dark:peer-checked:bg-gray-500 peer-checked:bg-gray-300':
                disabled,
            },
            className
          )}
        ></div>
      </div>
    </div>
  )
}
