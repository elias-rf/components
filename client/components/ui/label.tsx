import { cn } from '@/client/lib/cn'

type TLabelProps = {
  children?: React.ReactNode
  required?: boolean
  disabled?: boolean
  variant?: 'success' | 'error' | 'none'
  id: string
  className?: string
}
export function Label({
  children,
  required,
  id,
  disabled,
  variant,
  className,
}: TLabelProps) {
  if (!children) return null
  return (
    <label
      htmlFor={id}
      className={cn(
        'pl-1.5 block text-sm text-gray-900 dark:text-white',
        { 'text-gray-400 dark:text-gray-500': disabled },
        { 'text-green-700 dark:text-green-500': variant === 'success' },
        { 'text-red-700 dark:text-red-500': variant === 'error' },
        className
      )}
    >
      {children} {required ? '*' : null}
    </label>
  )
}
