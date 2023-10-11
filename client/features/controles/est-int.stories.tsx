import { EstInt } from '@/client/features/controles/est-int'
import { Story } from '@ladle/react'
import { JsonViewer } from '@textea/json-viewer'
import React from 'react'

export default {
  title: 'features/controles/est_int/est-int',
}

export const Default: Story = () => {
  const [state, setState] = React.useState({})
  return (
    <>
      <EstInt
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
