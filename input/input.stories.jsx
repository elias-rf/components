import { JsonView } from '../json-view/json-view.jsx'
import React from 'react'
import { Input } from './input.jsx'

const meta = {
  component: Input,
  args: {
    disabled: false,
  },
  argTypes: {},
}

export default meta

export const Default = {
  render: (props) => {
    const [vlr, setVlr] = React.useState('')
    return (
      <div className="flex flex-col space-y-4">
        <Input
          {...props}
          value={vlr}
          onChange={(e) => setVlr(e.target.value)}
        />
        <Input {...props} value={vlr} onInput={(e) => setVlr(e.target.value)} />
        <JsonView data={{ props, vlr }} />
      </div>
    )
  },
}
