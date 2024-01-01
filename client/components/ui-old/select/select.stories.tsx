import { JsonView } from '@/client/components/json-view/json-view.js'
import {
  Select,
  TSelectProps,
} from '@/client/components/ui-old/select/select.js'
import '@/client/index.css'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

const meta: Meta<typeof Select> = {
  component: Select,
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
type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: (props: TSelectProps) => {
    const [vlr, setVlr] = React.useState('')
    return (
      <div className="flex flex-col space-y-4">
        <Select
          {...props}
          value={vlr}
          onChange={(e: string) => setVlr(e)}
        >
          <Select.Option value="US">United States</Select.Option>
          <Select.Option value="CA">Canada</Select.Option>
          <Select.Option value="FR">France</Select.Option>
        </Select>

        <JsonView data={{ vlr, props }} />
      </div>
    )
  },
}
