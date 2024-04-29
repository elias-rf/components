import { Button } from '@/client/components/button/button.jsx'
import { JsonView } from '@/client/components/json-view/json-view.jsx'
import { MessageBox } from '@/client/components/ui-old/message_box.jsx'
import { useState } from 'react'

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
