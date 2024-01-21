import { Button } from '@/client/components/button/button.js'
import { JsonView } from '@/client/components/json-view/json-view.js'
import { Toaster } from '@/client/components/toast/toaster.js'
import { useToast } from '@/client/components/toast/use-toast.js'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

const meta: Meta<typeof Toaster> = {
  component: Toaster,
}

export default meta
type Story = StoryObj<typeof Toaster>

export const Default: Story = {
  render: (props) => {
    const t = useToast()
    const [count, setCount] = React.useState(0)

    return (
      <>
        <Button
          variant="outline"
          onClick={() => {
            t.toast({
              title: 'Título',
              description: 'Descrição',
            })
          }}
        >
          Show
        </Button>
        <Toaster />
        <JsonView data={{ props, t }} />
      </>
    )
  },
}
