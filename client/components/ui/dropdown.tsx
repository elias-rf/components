import { ChevronIcon } from '@/client/components/icons/chevron-icon'
import { Button } from '@/client/components/ui/button'
import { cn } from '@/client/lib/cn'
import React from 'react'

type TItem = { title: string; items?: TItem[] }

export type TDropdownProps = {
  items: TItem
  onClick: (e: string) => void
}

function Item({ items, onClick }: TDropdownProps) {
  if (items.items)
    return (
      <SubDropdown
        items={items}
        onClick={onClick}
      />
    )

  return (
    <button
      onClick={() => onClick(items.title)}
      className="flex items-center justify-between w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      {items.title}
    </button>
  )
}

function SubDropdown({ items, onClick }: TDropdownProps) {
  const [dropdownOpen, setDropdownOpen] = React.useState(false)

  return (
    <>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        {items.title}
        <ChevronIcon variant="right" />
      </button>
      <div
        className={cn(
          'pl-4 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700',
          { hidden: !dropdownOpen }
        )}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="doubleDropdownButton"
        >
          {items.items?.map((item) => (
            <li key={item.title}>
              <Item
                onClick={(title) => onClick(title)}
                items={item}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export function Dropdown({ onClick, items }: TDropdownProps) {
  const [dropdownOpen, setDropdownOpen] = React.useState(false)

  return (
    <>
      <Button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        color={'light'}
      >
        <div className="flex flex-row">
          {items.title}
          <ChevronIcon variant="down" />
        </div>
      </Button>

      <div
        className={cn(
          'z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700',
          { hidden: !dropdownOpen }
        )}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          {items.items?.map((item) => (
            <li key={item.title}>
              <Item
                onClick={onClick}
                items={item}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
