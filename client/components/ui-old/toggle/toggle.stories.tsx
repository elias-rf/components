import { JsonView } from '@/client/components/json-view/json-view.js'
import {
  TToggleProps,
  Toggle,
} from '@/client/components/ui-old/toggle/toggle.js'
import '@/client/index.css'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  args: {
    disabled: false,
    value: false,
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  render: (props: TToggleProps) => {
    const [vlr, setVlr] = React.useState(true)
    return (
      <div className="flex flex-col space-y-4">
        <Toggle
          {...props}
          value={vlr}
          onChange={(e: any) => setVlr(e)}
        ></Toggle>
        <JsonView data={{ props, vlr }} />
      </div>
    )
  },
}
