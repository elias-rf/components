import { cn } from '@/client/lib/cn'
import { ReactNode } from 'react'

export function ListGroupItem({
  children,
  onClick,
  className,
  active,
}: {
  children: ReactNode
  onClick: () => void
  className?: string
  active?: boolean
}) {
  return (
    <li
      onClick={onClick}
      className={cn(
        'cursor-pointer w-full px-2 py-1 border border-gray-200 last:rounded-b-lg first:rounded-t-lg dark:border-gray-600',
        { 'text-white bg-blue-700 dark:bg-gray-800': active },
        className
      )}
    >
      {children}
    </li>
  )
}
