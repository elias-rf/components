import { Button } from '@/client/components/button/button.js'
import { Toast, TToastProps } from '@/client/components/ui-old/toast.js'

import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

const meta: Meta<typeof Toast> = {
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
type Story = StoryObj<typeof Toast>

export const Default: Story = {
  render: ({ open, severity, message }: TToastProps) => {
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
  },
}
