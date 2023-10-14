import { cn } from '@/client/lib/cn'

export type TTabsProps = {
  tabs: { label: string; value: string; disabled?: boolean }[]
  value: string
  onChange: (value: string) => void
}

export function Tabs({ tabs, value: selected, onChange }: TTabsProps) {
  function handleClick(e: any) {
    if (tabs.find((tab) => tab.value === e.target.id)?.disabled) return
    if (e.target.id === selected) return
    onChange(e.target.id)
  }

  return (
    <>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {tabs.map((tab) => (
          <li
            key={tab.value}
            className="mr-2"
          >
            <div
              id={tab.value}
              onClick={handleClick}
              className={cn(
                'inline-block py-2 px-4 rounded-t-lg cursor-pointer',
                tab.value !== selected &&
                  'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300',
                tab.value === selected &&
                  'border-b-2 text-blue-600 bg-gray-100 border-blue-600 dark:bg-gray-800 dark:text-blue-500 dark:border-blue-500',
                tab.disabled &&
                  'text-gray-400 cursor-not-allowed dark:text-gray-500'
              )}
            >
              {tab.label}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
