import { JsonView } from '@/client/components/json-view/json-view.js'
import {
  CheckBox,
  TCheckBoxProps,
} from '@/client/components/ui-old/check-box/check-box.js'
import '@/client/index.css'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

const meta: Meta<typeof CheckBox> = {
  component: CheckBox,
  args: {
    disabled: false,
    variant: undefined,
    name: 'name',
    id: 'id',
  },
}

export default meta
type Story = StoryObj<typeof CheckBox>

export const Default: Story = {
  render: (props: TCheckBoxProps) => {
    const [vlr, setVlr] = React.useState(true)
    return (
      <div className="flex flex-col space-y-4">
        <CheckBox
          {...props}
          value={vlr}
          onChange={(value: boolean) => {
            setVlr(value)
            // action('onChange')({ value })
          }}
          onInput={(value: boolean, name: string) => {
            setVlr(value)
            // action('onInput')({ value, name })
          }}
        ></CheckBox>
        <JsonView data={{ props, vlr }} />
      </div>
    )
  },
}
