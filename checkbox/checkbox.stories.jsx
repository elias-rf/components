import React from 'react'
import { Checkbox } from './checkbox.jsx'

const meta = {
  component: Checkbox,
}

export default meta

export const Default = {
  render: () => {
    const [vlr, setVlr] = React.useState(true)
    return (
      <>
        <Checkbox
          checked={vlr}
          onCheckedChange={(e) => setVlr(e)}
        />
      </>
    )
  },
}
