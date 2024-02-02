import { JsonView } from '@/client/components/json-view/json-view.js'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Input } from './input.js'

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    disabled: false,
  },
  argTypes: {},
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
          onChange={(e: any) => setVlr(e.target.value)}
        />
        <Input
          {...props}
          value={vlr}
          onInput={(e: any) => setVlr(e.target.value)}
        />
        <JsonView data={{ props, vlr }} />
      </div>
    )
  },
}
