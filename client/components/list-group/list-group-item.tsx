import { cn } from '@/client/lib/utils.js'
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
        'w-full cursor-pointer border border-gray-200 px-2 py-1 first:rounded-t-lg last:rounded-b-lg dark:border-gray-600',
        { 'bg-blue-700 text-white dark:bg-gray-800': active },
        className
      )}
    >
      {children}
    </li>
  )
}
