import { ChevronIcon } from '@/client/components/icons/chevron-icon.js'
import { cn } from '@/client/lib/utils.js'
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
        className="flex w-full items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {label}
        <ChevronIcon variant="right" />
      </button>

      <div
        id="dropdown"
        className={cn(
          'absolute z-10 ml-4 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700',
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
