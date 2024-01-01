import { ChevronIcon } from '@/client/components/icons/chevron-icon.js'
import { cn } from '@/client/lib/cn.js'
import { ReactNode, useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

export function DropdownSub({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  const ref = useRef(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  useOnClickOutside(ref, () => {
    setDropdownOpen(false)
  })

  return (
    <div ref={ref}>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="flex items-center justify-between w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {label}
        <ChevronIcon variant="right" />
      </button>

      <div
        id="dropdown"
        className={cn(
          'ml-4 z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700',
          { hidden: !dropdownOpen }
        )}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {children}
        </ul>
      </div>
    </div>
  )
}
