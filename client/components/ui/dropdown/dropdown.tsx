import { ChevronIcon } from '@/client/components/icons/chevron-icon.js'
import { ShowContext } from '@/client/components/ui/dropdown/dropdown_context.js'
import { DropdownDivider } from '@/client/components/ui/dropdown/dropdown_divider.js'
import { DropdownHeader } from '@/client/components/ui/dropdown/dropdown_header.js'
import { DropdownItem } from '@/client/components/ui/dropdown/dropdown_item.js'
import { DropdownSub } from '@/client/components/ui/dropdown/dropdown_sub.js'
import { cn } from '@/client/lib/cn.js'
import { ReactNode, useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

function Dropdown({
  label,
  arrowIcon = false,
  children,
  position = 'left',
}: {
  label: ReactNode
  arrowIcon?: boolean
  children: ReactNode
  position?: 'left' | 'right'
}) {
  const ref = useRef(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  useOnClickOutside(ref, () => {
    setDropdownOpen(false)
  })

  return (
    <ShowContext.Provider
      value={{ show: dropdownOpen, setShow: setDropdownOpen }}
    >
      <div
        ref={ref}
        className="relative w-fit"
      >
        <button
          className="inline-flex items-center justify-between rounded-lg px-5 text-center text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {typeof label === 'string' ? <>{label}</> : <>{label}</>}
          {arrowIcon ? <ChevronIcon variant="down" /> : null}
        </button>

        <div
          id="dropdown"
          className={cn(
            'absolute z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow  dark:bg-gray-700 ',
            { hidden: !dropdownOpen, 'end-0': position === 'right' }
          )}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200 "
            aria-labelledby="dropdownDefaultButton"
          >
            {children}
          </ul>
        </div>
      </div>
    </ShowContext.Provider>
  )
}

Dropdown.Header = DropdownHeader
Dropdown.Divider = DropdownDivider
Dropdown.Item = DropdownItem
Dropdown.Sub = DropdownSub

export { Dropdown }
