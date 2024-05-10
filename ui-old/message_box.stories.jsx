import { useState } from 'react'
import { Button } from '../button/button.jsx'
import { JsonView } from '../json-view/json-view.jsx'
import { MessageBox } from './message_box.jsx'

const meta = {
  component: MessageBox,
  argTypes: { onClick: { action: 'onClick' } },
}
export default meta

export const Default = {
  render: () => {
    const [disp, setDisp] = useState({})
    const [message, setMessage] = useState('')
    return (
      <div className="flex flex-col space-y-4">
        <Button onClick={() => setMessage('Mensagem para mostrar')}>
          Show
        </Button>
        <MessageBox
          title="Titulo"
          onClick={(btn) => {
            setDisp(btn)
            setMessage('')
          }}
          option1="OK"
          option2="Cancel"
          option3="Close"
        >
          {message}
        </MessageBox>
        <JsonView data={{ disp }} />
      </div>
    )
  },
}
