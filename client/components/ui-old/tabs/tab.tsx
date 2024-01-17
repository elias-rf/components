import { cn } from '@/client/lib/utils.js'
import { ReactNode, useContext, useEffect } from 'react'
import { TabsContext } from './tabs_context.js'

export function Tab({
  name,
  label,
  disabled,
  children,
}: {
  name: string
  label: ReactNode
  disabled?: boolean
  children: ReactNode
}) {
  const { selected, body } = useContext(TabsContext)

  function handleSelect() {
    if (disabled) return
    selected.value = name
    body.value = children || <div></div>
  }

  useEffect(() => {
    if (selected.value === name) {
      body.value = children || <div></div>
    }
  }, [body, selected.value, children, name])

  return (
    <li
      key={name}
      className="mr-2"
    >
      <div
        id={name}
        onClick={handleSelect}
        className={cn(
          'inline-block cursor-pointer rounded-t-lg px-4 py-2',
          name !== selected.value &&
            'hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300',
          name === selected.value &&
            'border-b-2 border-blue-600 bg-gray-100 text-blue-600 dark:border-blue-500 dark:bg-gray-800 dark:text-blue-500',
          disabled && 'cursor-not-allowed text-gray-400 dark:text-gray-500'
        )}
      >
        {label}
      </div>
    </li>
  )
}
