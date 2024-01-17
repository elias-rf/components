import { cn } from '@/client/lib/utils.js'
import { ReactNode } from 'react'

export function Avatar({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'relative h-6 w-6 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600',
        className
      )}
    >
      {children}
    </div>
  )
}
