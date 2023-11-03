import { ShowContext } from '@/client/components/ui/dropdown/dropdown_context'
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
    console.log(show)
    if (onClick) {
      setShow(false)
      onClick()
    }
  }
  return (
    <li
      onClick={handleClick}
      className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    >
      {children}
    </li>
  )
}
