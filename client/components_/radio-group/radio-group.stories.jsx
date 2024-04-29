import React from 'react'
import { RadioGroup, RadioGroupItem } from './radio-group.jsx'

const meta = {
  component: RadioGroup,
}

export default meta

export const Default = {
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
