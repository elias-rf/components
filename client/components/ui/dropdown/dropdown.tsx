import { ChevronIcon } from '@/client/components/icons/chevron-icon'
import { ShowContext } from '@/client/components/ui/dropdown/dropdown_context'
import { DropdownDivider } from '@/client/components/ui/dropdown/dropdown_divider'
import { DropdownHeader } from '@/client/components/ui/dropdown/dropdown_header'
import { DropdownItem } from '@/client/components/ui/dropdown/dropdown_item'
import { DropdownSub } from '@/client/components/ui/dropdown/dropdown_sub'
import { cn } from '@/client/lib/cn'
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
          className="md:border-0  md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent  md:hover:bg-transparent  justify-between text-gray-700 hover:bg-gray-100   focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {typeof label === 'string' ? <>{label}</> : <>{label}</>}
          {arrowIcon ? <ChevronIcon variant="down" /> : null}
        </button>

        <div
          id="dropdown"
          className={cn(
            'z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44  dark:bg-gray-700 ',
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
