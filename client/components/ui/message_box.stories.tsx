import { JsonView } from '@/client/components/json-view/json-view'
import { Button } from '@/client/components/ui/button'
import { MessageBox } from '@/client/components/ui/message_box'
import '@/client/index.css'
import type { Story } from '@ladle/react'
import { useState } from 'react'

export default {
  title: 'Components / UI / messageBox',
  argTypes: { onClick: { action: 'onClick' } },
}

export const Default: Story = () => {
  const [disp, setDisp] = useState({})
  const [message, setMessage] = useState('')
  return (
    <div className="flex flex-col space-y-4">
      <Button onClick={() => setMessage('Mensagem para mostrar')}>Show</Button>
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
}
