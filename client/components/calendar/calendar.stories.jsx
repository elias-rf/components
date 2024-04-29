import { ptBR } from 'date-fns/locale'
import React from 'react'
import { JsonView } from '../../components/json-view/json-view.jsx'
import { Calendar } from './calendar.jsx'

const meta = {
  component: Calendar,
}

export default meta

export const Default = {
  render: (props) => {
    const [vlr, serVlr] = (React.useState < Date) | (undefined > new Date())
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
