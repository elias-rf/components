import { Operacao } from '@/client/features/controles/operacao'
import { Story } from '@ladle/react'
import { JsonViewer } from '@textea/json-viewer'
import React from 'react'

export default {
  title: 'features/controles/operacao/operacao',
}

function OperacaoStory() {
  const [state, setState] = React.useState({})
  return (
    <>
      <Operacao
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

export const Default: Story = () => <OperacaoStory />
