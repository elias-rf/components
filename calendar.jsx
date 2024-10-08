import PropTypes from 'prop-types'
import {
  Calendar as AriaCalendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  Text,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { CalendarGridHeader } from './calendar-grid-header.jsx'
import { CalendarHeader } from './calendar-header.jsx'
import { focusRing } from './utils.mjs'

const cellStyles = tv({
  extend: focusRing,
  base: 'flex h-9 w-9 cursor-default items-center justify-center rounded-full text-sm forced-color-adjust-none',
  variants: {
    isSelected: {
      false:
        'text-zinc-900 hover:bg-gray-100 pressed:bg-gray-200 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:pressed:bg-zinc-600',
      true: 'bg-blue-600 text-white invalid:bg-red-600 forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] forced-colors:invalid:bg-[Mark]',
    },
    isDisabled: {
      true: 'text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]',
    },
  },
})

// export interface CalendarProps<T extends DateValue> extends Omit<AriaCalendarProps<T>, 'visibleDuration'> {
//   errorMessage?: string;
// }

/**
 * @param {object} props
 */
export function Calendar({ errorMessage, ...props }) {
  return (
    <AriaCalendar {...props}>
      <CalendarHeader />
      <CalendarGrid>
        <CalendarGridHeader />
        <CalendarGridBody>
          {(date) => (
            <CalendarCell
              date={date}
              className={cellStyles}
            />
          )}
        </CalendarGridBody>
      </CalendarGrid>
      {errorMessage && (
        <Text
          slot="errorMessage"
          className="text-sm text-red-600"
        >
          {errorMessage}
        </Text>
      )}
    </AriaCalendar>
  )
}

Calendar.propTypes = {
  errorMessage: PropTypes.string,
}
