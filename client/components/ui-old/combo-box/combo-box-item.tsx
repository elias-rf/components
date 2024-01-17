import { cn } from '@/client/lib/utils.js'
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
        'block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white',
        { 'bg-gray-200 dark:bg-gray-500': selected }
      )}
    >
      {children}
    </li>
  )
}
