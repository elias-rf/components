import type { Story } from '@ladle/react'
import React from 'react'
import { MessageBox } from '@/client/components/ui/message_box'
import '@/client/index.css'
import ReactJson from 'react-json-view'

function MessageBoxState() {
  const [disp, setDisp] = React.useState({})
  return (
    <div className="flex flex-col space-y-4">
      <MessageBox
        title="Titulo"
        onClick={setDisp}
        option1="OK"
        option2="Cancel"
        option3="Close"
      >
        Mensagem para mostrar
      </MessageBox>
      <ReactJson
        src={{ disp }}
        theme="flat"
      />
    </div>
  )
}

export const Default: Story = () => <MessageBoxState />

Default.argTypes = { onClick: { action: 'onClick' } }
