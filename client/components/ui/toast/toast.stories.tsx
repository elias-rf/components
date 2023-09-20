import { Button } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Toast } from './toast'

const meta: Meta<typeof Toast> = {
  component: Toast,
  args: { open: true, message: 'Mensagem de teste' },
  argTypes: {
    severity: {
      control: 'select',
      options: ['error', 'warning', 'check', 'none'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Toast>

function ToastStory({ open, severity, message }: any) {
  const [show, setShow] = React.useState<boolean>(open)

  return (
    <>
      <Button onClick={() => setShow(true)}>Show</Button>
      <Toast
        open={show}
        onClose={() => setShow(false)}
        message={message}
        severity={severity}
      />
    </>
  )
}

export const Default: Story = {
  render: (props) => <ToastStory {...props} />,
}
