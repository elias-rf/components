import { cn } from '@/client/lib/cn'
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
        'relative w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600',
        className
      )}
    >
      {children}
    </div>
  )
}
