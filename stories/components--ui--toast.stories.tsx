import { Button } from '@mui/material'
import type { Story } from '@ladle/react'
import React from 'react'
import { Toast, TToastProps } from '@/client/components/ui/toast'
import '@/client/index.css'

export const Default: Story<TToastProps> = ({
  open,
  severity,
  message,
}: TToastProps) => {
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

export default {
  args: { open: true, message: 'Mensagem de teste' },
  argTypes: {
    severity: {
      control: { type: 'select' },
      options: ['error', 'warning', 'check', 'none'],
    },
  },
}
