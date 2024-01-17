import { JsonView } from '@/client/components/json-view/json-view.js'
import type { Meta, StoryObj } from '@storybook/react'
import { ptBR } from 'date-fns/locale'
import React from 'react'
import { Calendar } from './calendar.js'

const meta: Meta<typeof Calendar> = {
  component: Calendar,
}

export default meta
type Story = StoryObj<typeof Calendar>

export const Default: Story = {
  render: (props) => {
    const [vlr, serVlr] = React.useState<Date | undefined>(new Date())
    return (
      <>
        <Calendar
          mode="single"
          locale={ptBR}
          selected={vlr}
          onSelect={serVlr}
        ></Calendar>
        <JsonView data={{ vlr }} />
      </>
    )
  },
}
