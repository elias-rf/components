import { ShowContext } from '@/client/components/ui-old/dropdown/dropdown_context.js'
import { ReactNode, useContext } from 'react'

export function DropdownItem({
  children,
  onClick,
}: {
  children: ReactNode
  onClick?: () => void
}) {
  const { show, setShow } = useContext(ShowContext)

  function handleClick() {
    if (onClick) {
      setShow(false)
      onClick()
    }
  }
  return (
    <li
      onClick={handleClick}
      className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      {children}
    </li>
  )
}
