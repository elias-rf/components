import { cn } from '@/client/lib/cn.js'

type THelperProps = {
  children?: React.ReactNode
  variant?: 'success' | 'error' | 'none'
}
export function Helper({ children, variant }: THelperProps) {
  return (
    <p
      className={cn(
        'text-xs text-gray-500 dark:text-gray-400',
        { 'text-green-600 dark:text-green-500': variant === 'success' },
        { 'text-red-600 dark:text-red-500': variant === 'error' }
      )}
    >
      {children}
    </p>
  )
}
