import * as Ariakit from '@ariakit/react'

export function TabPanel({ children, id }) {
  return <Ariakit.TabPanel tabId={id}>{children}</Ariakit.TabPanel>
}
