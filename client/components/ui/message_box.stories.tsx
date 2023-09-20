import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { MessageBox } from './message_box'

const meta: Meta<typeof MessageBox> = {
  component: MessageBox,
  argTypes: { onClick: { action: 'onClick' } },
}

export default meta
type Story = StoryObj<typeof MessageBox>

function MessageBoxState() {
  const [disp, setDisp] = React.useState({})
  return (
    <>
      <MessageBox
        title="Titulo"
        onClick={setDisp}
        option1="OK"
        option2="Cancel"
        option3="Close"
      >
        Mensagem para mostrar
      </MessageBox>
      <div>{JSON.stringify(disp)}</div>
    </>
  )
}

export const Default: Story = {
  render: () => <MessageBoxState />,
}
