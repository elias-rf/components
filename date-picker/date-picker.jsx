import { Button } from '../button/button.jsx'
import { Calendar } from '../calendar/calendar.jsx'
import { Popover, PopoverContent, PopoverTrigger } from '../popover/popover.jsx'
import { getDateFormat } from '../lib/get-date-format.mjs'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format, parse } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import React from 'react'

export const DatePicker = ({ value, onChange }) => {
  const [selected, setSelected] = React.useState(new Date())

  React.useEffect(() => {
    const format = getDateFormat(value)
    if (format) {
      setSelected(parse(value, format, new Date()))
    } else {
      setSelected(undefined)
    }
  }, [value])

  function handleChange(event) {
    setSelected(event)
    if (event) {
      onChange(format(event, 'dd/MM/yyyy'))
      return
    }
    onChange('')
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={'ghost'} size={'icon'}>
          <CalendarIcon className="w-4 h-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          defaultMonth={selected}
          selected={selected}
          onSelect={handleChange}
          initialFocus
          locale={ptBR}
        />
      </PopoverContent>
    </Popover>
  )
}
