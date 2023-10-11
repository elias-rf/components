import { MessageBox } from '@/client/components/ui/message_box'
import '@/client/index.css'
import type { Story } from '@ladle/react'
import React from 'react'
import ReactJson from 'react-json-view'

export default {
  title: 'Components / UI / messageBox',
  argTypes: { onClick: { action: 'onClick' } },
}

export const Default: Story = () => {
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
