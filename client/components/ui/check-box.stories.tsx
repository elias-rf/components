import type { Meta, StoryObj } from '@storybook/react'
import { CheckBox } from './check-box'
import { JsonViewer } from '@textea/json-viewer'
import React from 'react'

const meta: Meta<typeof CheckBox> = {
  component: CheckBox,
  args: {
    disabled: false,
    label: 'Label',
    value: false,
    required: true,
    variant: 'none',
    helper: 'Ajuda',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
}

export default meta
type Story = StoryObj<typeof CheckBox>

function CheckBoxAux(props: any) {
  const [vlr, setVlr] = React.useState(true)

  return (
    <>
      <CheckBox
        {...props}
        value={vlr}
        onChange={(e: any) => setVlr(e)}
      ></CheckBox>
      <JsonViewer value={{ props, vlr }} />
    </>
  )
}

export const Default: Story = {
  render: (props) => {
    return <CheckBoxAux {...props} />
  },
}
