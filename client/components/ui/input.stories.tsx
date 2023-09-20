import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Input } from './input'
import { JsonViewer } from '@textea/json-viewer'

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    label: 'Input text',
    helper: 'Mensagem',
    required: true,
    disabled: false,
  },
  argTypes: {
    variant: { control: 'select', options: ['error', 'success', 'none'] },
  },
}

export default meta
type Story = StoryObj<typeof Input>

function InputAux(props: any) {
  const [vlr, setVlr] = React.useState('')
  return (
    <>
      <Input
        {...props}
        value={vlr}
        onChange={(e: any) => setVlr(e)}
      />
      <JsonViewer value={{ props, vlr }} />
    </>
  )
}

export const Default: Story = {
  render: (props) => {
    return <InputAux {...props} />
  },
}
