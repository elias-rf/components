import React from 'react'
import { JsonView } from '../json-view/json-view.jsx'
import { Combobox } from './combobox.jsx'

const meta = {
  component: Combobox,
}

export default meta

const fruits = [
  {
    value: 'Apple',
    label: '🍎 Apple',
  },
  {
    value: 'Grape',
    label: ' 🍇 Grape',
  },
  {
    value: 'Orange',
    label: '🍊 Orange',
  },
  {
    value: 'Strawberry',
    label: '🍓 Strawberry',
  },
  {
    value: 'Watermelon',
    label: '🍉 Watermelon',
  },
]

export const Default = {
  render: (props) => {
    const [vlr, setVlr] = React.useState('')
    return (
      <div className="flex w-60 flex-col space-y-4">
        <Combobox
          options={fruits}
          value={vlr}
          onValueChange={(e) => setVlr(e)}
          label="Your favorite fruit"
        ></Combobox>
        <JsonView data={{ props, vlr }} />
      </div>
    )
  },
}
