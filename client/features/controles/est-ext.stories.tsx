import { EstExt } from '@/client/features/controles/est-ext'
import type { Story } from '@ladle/react'
import { JsonViewer } from '@textea/json-viewer'
import React from 'react'

export default {
  title: 'features/controles/est_ext/est-ext',
}

export const Default: Story = () => {
  const [state, setState] = React.useState({})
  return (
    <>
      <EstExt
        onState={setState}
        dia="2020-01-01"
      />
      <JsonViewer
        value={{
          state,
        }}
      />
    </>
  )
}
