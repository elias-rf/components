import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Textarea } from './textarea'
import { JsonViewer } from '@textea/json-viewer'

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  args: {
    label: 'Input text',
    helper: 'Mensagem',
    required: true,
    disabled: false,
    rows: 3,
  },
  argTypes: {
    variant: { control: 'select', options: ['error', 'success', 'none'] },
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

function TextareaAux(props: any) {
  const [vlr, setVlr] = React.useState('')
  return (
    <>
      <Textarea
        {...props}
        value={vlr}
        onChange={(e: any) => setVlr(e.target.value)}
      />
      <JsonViewer value={{ vlr, props }} />
    </>
  )
}

export const Default: Story = {
  render: (props) => {
    return <TextareaAux {...props} />
  },
}
