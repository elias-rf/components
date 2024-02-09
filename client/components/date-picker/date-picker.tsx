import { Button } from '@/client/components/button/button.js'
import { Calendar } from '@/client/components/calendar/calendar.js'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/client/components/popover/popover.js'
import { cn } from '@/client/lib/utils.js'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format, parse } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import React from 'react'

type TDatePickerProps = {
  value?: Date
  onChange: (date: Date | undefined) => void
  required?: boolean
}

export function DatePicker({ value, onChange, required }: TDatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  React.useEffect(() => {
    if (value) {
      setDate(parse(value, 'dd/MM/yyyy', new Date()))
    }
  }, [value])

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
          selected={date}
          onSelect={onChange}
          initialFocus
          locale={ptBR}
          required={required}
        />
      </PopoverContent>
    </Popover>
  )
}
