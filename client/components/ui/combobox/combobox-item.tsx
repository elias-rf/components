import { cn } from '@/client/lib/cn.js'
import { ReactNode } from 'react'

export function ComboboxItem({
  children,
  onClick,
  selected,
}: {
  children: ReactNode
  onClick?: () => void
  selected: boolean
}) {
  return (
    <li
      onClick={onClick}
      className={cn(
        'block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white',
        { 'bg-gray-200 dark:bg-gray-500': selected }
      )}
    >
      {children}
    </li>
  )
}
