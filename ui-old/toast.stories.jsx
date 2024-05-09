import React from 'react'
import { Button } from '../button/button.jsx'
import { Toast } from '../ui-old/toast.jsx'

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
    const [show, setShow] = React.useState(open)

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
