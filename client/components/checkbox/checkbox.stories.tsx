import { CheckedState } from '@radix-ui/react-checkbox'
import { FontBoldIcon } from '@radix-ui/react-icons'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Checkbox } from './checkbox.js'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: (props) => {
    const [vlr, setVlr] = React.useState<CheckedState>(true)
    return (
      <>
        <div className="bg-white p-4 ">
          <Checkbox
            checked={vlr}
            onCheckedChange={(e) => setVlr(e)}
          />
        </div>
        <div className="dark bg-black p-4">
          <Checkbox />
        </div>
      </>
    )
  },
}
