import {
  CalendarGridHeader as AriaCalendarGridHeader,
  CalendarHeaderCell,
} from 'react-aria-components'

export function CalendarGridHeader() {
  return (
    <AriaCalendarGridHeader>
      {(day) => (
        <CalendarHeaderCell className="text-xs font-semibold text-gray-500">
          {day}
        </CalendarHeaderCell>
      )}
    </AriaCalendarGridHeader>
  )
}
