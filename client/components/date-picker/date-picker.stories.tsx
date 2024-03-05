import { Input } from '@/client/components/input/input.js'
import { JsonView } from '@/client/components/json-view/json-view.js'
import type { Meta, StoryObj } from '@storybook/react'
import { format } from 'date-fns'
import React from 'react'
import { DatePicker } from './date-picker.js'

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
}

export default meta
type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
  render: (props) => {
    const [vlr, setVlr] = React.useState<string>(
      format(new Date(), 'dd/MM/yyyy')
    )

    function handleVlr(event: any) {
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
