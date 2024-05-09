import { JsonView } from '../../json-view/json-view.jsx'
import { Input } from '../input/input.jsx'

import React from 'react'

const meta = {
  component: Input,
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

export const Default = {
  render: (props) => {
    const [vlr, setVlr] = React.useState('')
    return (
      <div className="flex flex-col space-y-4">
        <Input {...props} value={vlr} onChange={(e) => setVlr(e)} />
        <Input {...props} value={vlr} onInput={(e) => setVlr(e)} />
        <JsonView data={{ props, vlr }} />
      </div>
    )
  },
}
