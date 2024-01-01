import { JsonView } from '@/client/components/json-view/json-view.js'
import { Input } from '@/client/components/ui-old/input/input.js'
import '@/client/index.css'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    disabled: false,
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['error', 'success', 'none'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: (props) => {
    const [vlr, setVlr] = React.useState('')
    return (
      <div className="flex flex-col space-y-4">
        <Input
          {...props}
          value={vlr}
          onChange={(e: any) => setVlr(e)}
        />
        <Input
          {...props}
          value={vlr}
          onInput={(e: any) => setVlr(e)}
        />
        <JsonView data={{ props, vlr }} />
      </div>
    )
  },
}
