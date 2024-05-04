import { JsonView } from '../../json-view/json-view.jsx'
import { Toggle } from './toggle.jsx'

import React from 'react'

const meta = {
  component: Toggle,
  args: {
    disabled: false,
    value: false,
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
}

export default meta

export const Default = {
  render: (props) => {
    const [vlr, setVlr] = React.useState(true)
    return (
      <div className="flex flex-col space-y-4">
        <Toggle {...props} value={vlr} onChange={(e) => setVlr(e)}></Toggle>
        <JsonView data={{ props, vlr }} />
      </div>
    )
  },
}
