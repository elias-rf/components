import { Button } from '@/client/components/button/button.js'
import { Calendar } from '@/client/components/calendar/calendar.js'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/client/components/popover/popover.js'
import { cn } from '@/client/lib/utils.js'
import { getDateFormat } from '@/utils/date/get-date-format.mjs'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format, parse } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import React from 'react'

type TDatePickerProps = {
  value: string
  onChange: (date: string) => void
}

export function DatePicker({ value, onChange }: TDatePickerProps) {
  const [selected, setSelected] = React.useState<Date | undefined>(new Date())

  React.useEffect(() => {
    const format = getDateFormat(value)
    if (format) {
      setSelected(parse(value, format, new Date()))
    } else {
      setSelected(undefined)
    }
  }, [value])

  function handleChange(event?: Date) {
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
        <Button
          variant={'ghost'}
          size={'icon'}
        >
          <CalendarIcon className="h-4 w-4" />
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
