import { Transferencia } from '@/client/features/controles/transferencia'
import { Story } from '@ladle/react'
import { JsonViewer } from '@textea/json-viewer'
import React from 'react'

export default {
  title: 'features/controles/transferencia/transferencia',
}

export const Default: Story = () => {
  const [state, setState] = React.useState({})
  return (
    <>
      <Transferencia
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
