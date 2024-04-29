import { Button } from '@/client/components/button/button.jsx'
import { Toast, TToastProps } from '@/client/components/ui-old/toast.jsx'
import React from 'react'

const meta = {
  component: Toast,
  args: { open: true, message: 'Mensagem de teste' },
  argTypes: {
    severity: {
      control: { type: 'select' },
      options: ['error', 'warning', 'check', 'none'],
    },
  },
}

export default meta

export const Default = {
  render: ({ open, severity, message }) => {
    const [show, setShow] = React.useState < boolean > open

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
  },
}
