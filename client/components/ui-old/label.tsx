import { AccessLabel } from '@/client/components/ui-old/access-label.js'
import { cn } from '@/client/lib/cn.js'
import { getAccessKey } from '@/utils/string/get-access-key.js'

type TLabelProps = {
  children?: React.ReactNode
  required?: boolean
  disabled?: boolean
  variant?: 'success' | 'error' | 'none'
  name: string
  className?: string
  accessKey?: string
}
export function Label({
  children,
  required,
  name,
  disabled,
  variant,
  className,
}: TLabelProps) {
  if (!children) return null
  return (
    <label
      htmlFor={name}
      accessKey={getAccessKey(children).accessKey}
      className={cn(
        'block pl-1.5 text-sm text-gray-500 dark:text-gray-400',
        { 'text-gray-400 dark:text-gray-500': disabled },
        { 'text-green-700 dark:text-green-500': variant === 'success' },
        { 'text-red-700 dark:text-red-500': variant === 'error' },
        className
      )}
    >
      <span className="whitespace-nowrap">
        <AccessLabel>{children}</AccessLabel> {required ? '*' : null}
      </span>
    </label>
  )
}
