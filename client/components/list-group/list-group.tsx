import { cn } from '@/client/lib/utils.js'
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
        'bg-white text-sm font-medium text-gray-900 dark:bg-gray-700 dark:text-white',
        className
      )}
    >
      {children}
    </ul>
  )
}

ListGroup.Item = ListGroupItem

export { ListGroup }
