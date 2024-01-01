import { JsonView } from '@/client/components/json-view/json-view.js'
import { Button } from '@/client/components/ui-old/button/button.js'
import { MessageBox } from '@/client/components/ui-old/message_box.js'
import '@/client/index.css'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof MessageBox> = {
  component: MessageBox,
  argTypes: { onClick: { action: 'onClick' } },
}
export default meta
type Story = StoryObj<typeof MessageBox>

export const Default: Story = {
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
