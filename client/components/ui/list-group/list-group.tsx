import { cn } from '@/client/lib/cn.js'
import { ReactNode } from 'react'
import { ListGroupItem } from './list-group-item.js'

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
        'text-sm font-medium text-gray-900 bg-white dark:bg-gray-700 dark:text-white',
        className
      )}
    >
      {children}
    </ul>
  )
}

ListGroup.Item = ListGroupItem

export { ListGroup }
