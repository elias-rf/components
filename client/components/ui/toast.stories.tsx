import { Button } from '@/client/components/ui/button/button.js'
import { Toast, TToastProps } from '@/client/components/ui/toast.js'
import '@/client/index.css'
import type { Story } from '@ladle/react'

import React from 'react'

export default {
  title: 'components/ui/toast',
  args: { open: true, message: 'Mensagem de teste' },
  argTypes: {
    severity: {
      control: { type: 'select' },
      options: ['error', 'warning', 'check', 'none'],
    },
  },
}

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
