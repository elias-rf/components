import * as Ariakit from '@ariakit/react'
import * as React from 'react'

import { cn } from '../lib/utils.mjs'

export function Tabs({ children }) {
  return <Ariakit.TabProvider>{children}</Ariakit.TabProvider>
}
