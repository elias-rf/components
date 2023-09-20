import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Select } from './select'
import { JsonViewer } from '@textea/json-viewer'

const meta: Meta<typeof Select> = {
  component: Select,
  args: {
    label: 'Select an option',
    helper: 'Mensagem',
    required: true,
    disabled: false,
    options: [
      ['United States', 'US'],
      ['Canada', 'CA'],
      ['France', 'FR'],
    ],
  },
  argTypes: {
    variant: { control: 'select', options: ['error', 'success', 'none'] },
  },
}

export default meta
type Story = StoryObj<typeof Select>

function SelectAux(props: any) {
  const [vlr, setVlr] = React.useState('')
  return (
    <>
      <Select
        {...props}
        value={vlr}
        onChange={(e: string) => setVlr(e)}
      />
      <JsonViewer value={{ vlr, props }} />
    </>
  )
}

export const Default: Story = {
  render: (props) => {
    return <SelectAux {...props} />
  },
}
