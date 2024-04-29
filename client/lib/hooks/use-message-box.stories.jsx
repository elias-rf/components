import { JsonView } from '@/client/components/json-view/json-view.jsx'
import React from 'react'
import { useMessageBox } from './use-message-box.jsx'

const meta = {
  component: JsonView,
}

export default meta

export const Default = {
  render: () => {
    const [state, setState] = React.useState('none')
    const { MsgBox, confirm } = useMessageBox({
      title: 'Teste',
      message: 'Teste de uso',
      option1: 'Confirma',
      option2: 'Cancela',
    })

    async function showState() {
      const response = await confirm('Teste de confirmação')
      console.log('showState', response)
      setState(response)
    }

    return (
      <>
        <button onClick={showState}>Show Msg</button>
        Response {state}
        <MsgBox />
        <JsonView
          data={{
            state,
          }}
        />
      </>
    )
  },
}
