import { Input } from '@/client/components/input/input.jsx'
import { JsonView } from '@/client/components/json-view/json-view.jsx'
import { format } from 'date-fns'
import React from 'react'
import { DatePicker } from './date-picker.jsx'

const meta = {
  component: DatePicker,
}

export default meta

export const Default = {
  render: (props) => {
    const [vlr, setVlr] =
      React.useState < string > format(new Date(), 'dd/MM/yyyy')

    function handleVlr(event) {
      if (typeof event === 'string') {
        setVlr(event)
        return
      }

      setVlr(event.target.value)
    }

    return (
      <>
        <div className="flex flex-row">
          <Input
            value={vlr}
            onChange={handleVlr}
          />
          <DatePicker
            value={vlr}
            onChange={handleVlr}
          ></DatePicker>
        </div>
        <JsonView data={{ vlr }} />
      </>
    )
  },
}
