import { useStateMutable } from '@/client/lib/hooks/use-state-mutable'
import { ReactNode, useEffect } from 'react'
import { Tab } from './tab'
import { TabsContext } from './tabs_context'

export type TTabsProps = {
  selected: string
  children: ReactNode
  onChange?: (value: string) => void
}

function Tabs({ selected, children, onChange }: TTabsProps) {
  const tbSelected = useStateMutable({ value: selected })
  const tbBody = useStateMutable({ value: <div></div> })

  useEffect(() => {
    onChange && onChange(tbSelected.value)
  }, [tbSelected.value, onChange])

  return (
    <TabsContext.Provider value={{ selected: tbSelected, body: tbBody }}>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {children}
      </ul>
      {tbBody.value}
    </TabsContext.Provider>
  )
}

Tabs.Tab = Tab

export { Tabs }
