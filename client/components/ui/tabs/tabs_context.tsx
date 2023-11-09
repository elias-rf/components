import { ReactNode, createContext } from 'react'

type TTabsContext = {
  selected: { value: string }
  body: { value: ReactNode }
}

export const TabsContext = createContext<TTabsContext>({
  selected: { value: '' },
  body: { value: <div></div> },
})
