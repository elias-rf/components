import { cn } from '@/client/lib/cn'
import { ReactNode } from 'react'

function ListGroupItem({
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
        'cursor-pointer w-full px-4 py-2 border border-gray-200 last:rounded-b-lg first:rounded-t-lg dark:border-gray-600',
        { 'text-white bg-blue-700 dark:bg-gray-800': active },
        className
      )}
    >
      {children}
    </li>
  )
}

function ListGroup({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <ul
      className={cn(
        ' text-sm font-medium text-gray-900 bg-white dark:bg-gray-700 dark:text-white',
        className
      )}
    >
      {children}
    </ul>
  )
}

ListGroup.Item = ListGroupItem

export { ListGroup }
