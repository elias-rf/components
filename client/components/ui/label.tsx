import { AccessLabel } from '@/client/components/ui/access-label'
import { cn } from '@/client/lib/cn'
import { getAccessKey } from '@/utils/string/get-access-key'

type TLabelProps = {
  children?: React.ReactNode
  required?: boolean
  disabled?: boolean
  variant?: 'success' | 'error' | 'none'
  id: string
  className?: string
  accessKey?: string
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
      accessKey={getAccessKey(children).accessKey}
      className={cn(
        'pl-1.5 block text-sm text-gray-500 dark:text-gray-400',
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
