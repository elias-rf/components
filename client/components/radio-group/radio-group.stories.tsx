import { FontBoldIcon } from '@radix-ui/react-icons'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { RadioGroup, RadioGroupItem } from './radio-group.js'

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: (props) => {
    const [vlr, setVlr] = React.useState('')

    return (
      <>
        <div className="bg-white p-4 ">
          <RadioGroup
            value={vlr}
            onValueChange={(e) => {
              setVlr(e)
            }}
          >
            <RadioGroupItem value="teste1">TESTE1</RadioGroupItem>
            <RadioGroupItem value="teste2">TESTE2</RadioGroupItem>
          </RadioGroup>
        </div>
        <div className="dark bg-black p-4">
          <RadioGroup
            value={vlr}
            onValueChange={(e) => {
              setVlr(e)
            }}
          >
            <RadioGroupItem value="teste1">TESTE1</RadioGroupItem>
            <RadioGroupItem value="teste2">TESTE2</RadioGroupItem>
          </RadioGroup>
        </div>
      </>
    )
  },
}
