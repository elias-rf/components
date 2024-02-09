import { Input } from '@/client/components/input/input.js'
import { JsonView } from '@/client/components/json-view/json-view.js'
import { UTCDateMini } from '@date-fns/utc'
import type { Meta, StoryObj } from '@storybook/react'
import { format, parse } from 'date-fns'
import { flow } from 'lodash-es'
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
      let vlr = ''

      if (event instanceof Date) {
        vlr = flow([($) => format($, 'dd/MM/yyyy')])(event)
        setVlr(vlr)
        return
      }
      console.log(`🚀 ~ handleVlr ~ vlr:`, event.target.value)

      vlr = event.target.value

      vlr = flow([
        ($) => parse($, 'dd/MM/yyyy', new Date()),
        ($) => format($, 'dd/MM/yyyy'),
      ])(vlr)

      console.log(`🚀 ~ vlr:`, vlr)

      setVlr(vlr)
    }

    return (
      <>
        <div className="flex flex-row">
          <Input
            value={vlr}
            onChange={handleVlr}
          />
          <DatePicker
            value={flow([($) => parse($, 'dd/MM/yyyy', new Date())])(vlr)}
            onChange={handleVlr}
          ></DatePicker>
        </div>
        <JsonView data={{ vlr }} />
      </>
    )
  },
}
