import React from 'react'
import { Checkbox } from './checkbox.jsx'

const meta = {
  component: Checkbox,
}

export default meta

export const Default = {
  render: (props) => {
    const [vlr, setVlr] = React.useState < CheckedState > true
    return (
      <>
        <div className="bg-white p-4 ">
          <Checkbox
            checked={vlr}
            onCheckedChange={(e) => setVlr(e)}
          />
        </div>
        <div className="dark bg-black p-4">
          <Checkbox />
        </div>
      </>
    )
  },
}
