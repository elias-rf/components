import React from 'react'
import { Checkbox } from './checkbox.jsx'

const meta = {
  component: Checkbox,
}

export default meta

export const Default = {
  render: (props) => {
    const [vlr, setVlr] = React.useState(true)
    return (
      <>
        <div className="p-4 bg-white ">
          <Checkbox checked={vlr} onCheckedChange={(e) => setVlr(e)} />
        </div>
        <div className="p-4 bg-black dark">
          <Checkbox />
        </div>
      </>
    )
  },
}
