import { CalendarIcon } from 'lucide-react'
import PropTypes from 'prop-types'
import { DateRangePicker as AriaDateRangePicker } from 'react-aria-components'
import { Dialog } from '../../../dialog.jsx'
import { Button } from '../../button.jsx'
import { DateInput } from '../../date-input.jsx'
import { Popover } from '../../popover.jsx'
import { RangeCalendar } from '../../range-calendar.jsx'
import { composeTailwindRenderProps } from '../../utils.mjs'
import { Description } from '../description.jsx'
import { FieldError } from '../field-error.jsx'
import { FieldGroup } from '../field-group.jsx'
import { Label } from '../label.jsx'

// export interface DateRangePickerProps<T extends DateValue>
//   extends AriaDateRangePickerProps<T> {
//   label?: string;
//   description?: string;
//   errorMessage?: string | ((validation: ValidationResult) => string);
// }

export function DateRangePicker({
  label,
  description,
  errorMessage,
  ...props
}) {
  return (
    <AriaDateRangePicker
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'group flex flex-col gap-1'
      )}
    >
      {label && <Label>{label}</Label>}
      <FieldGroup className="w-auto min-w-[208px]">
        <DateInput
          slot="start"
          className="px-2 py-1.5 text-sm"
        />
        <span
          aria-hidden="true"
          className="text-gray-800 group-disabled:text-gray-200 dark:text-zinc-200 group-disabled:dark:text-zinc-600 forced-colors:text-[ButtonText] group-disabled:forced-colors:text-[GrayText]"
        >
          –
        </span>
        <DateInput
          slot="end"
          className="flex-1 px-2 py-1.5 text-sm"
        />
        <Button
          variant="icon"
          className="mr-1 w-6 rounded outline-offset-0"
        >
          <CalendarIcon
            aria-hidden
            className="h-4 w-4"
          />
        </Button>
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <Dialog>
          <RangeCalendar />
        </Dialog>
      </Popover>
    </AriaDateRangePicker>
  )
}

DateRangePicker.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  errorMessage: PropTypes.string,
}
