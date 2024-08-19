import * as Ariakit from '@ariakit/react'
import './style.css'

export function TabList({ children }) {
  return (
    <Ariakit.TabList
      className="tab-list"
      aria-label="Groceries"
    >
      {children}
    </Ariakit.TabList>
  )
}
