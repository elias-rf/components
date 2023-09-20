import { cn } from '@/client/lib/cn'

type TTextareaProps = {
  label?: string
  helper?: string
  onChange?: (e: any) => void
  onBlur?: (e: any) => void
  onKeyDown?: (e: any) => void
  value?: string
  required?: boolean
  disabled?: boolean
  variant?: 'success' | 'error'
  rows?: number
}

export function Textarea({
  label,
  value,
  helper = '',
  required = false,
  disabled = false,
  onChange,
  onBlur,
  onKeyDown,
  variant,
  rows = 3,
}: TTextareaProps) {
  return (
    <div>
      {label ? (
        <label
          htmlFor="first_name"
          className={cn(
            'block text-sm font-medium text-gray-900 dark:text-white',
            { 'text-gray-400 dark:text-gray-500': disabled },
            { 'text-green-700 dark:text-green-500': variant === 'success' },
            { 'text-red-700 dark:text-red-500': variant === 'error' }
          )}
        >
          {label} {required ? '*' : null}
        </label>
      ) : null}
      <textarea
        rows={rows}
        className={cn(
          'p-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
          {
            'text-gray-600 bg-gray-100 cursor-not-allowed dark:text-gray-400':
              disabled,
          },
          {
            'bg-green-50 border-green-500 text-green-900 placeholder-green-700 focus:ring-green-500 focus:border-green-500 dark:bg-green-100 dark:border-green-400':
              variant === 'success',
          },
          {
            'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400':
              variant === 'error',
          }
        )}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        disabled={disabled}
      />
      <p
        className={cn(
          'text-xs text-gray-500 dark:text-gray-400',
          { 'text-green-600 dark:text-green-500': variant === 'success' },
          { 'text-red-600 dark:text-red-500': variant === 'error' }
        )}
      >
        {helper}
      </p>
    </div>
  )
}
