import { CalendarIcon } from 'lucide-react'
import PropTypes from 'prop-types'
import { DatePicker as AriaDatePicker } from 'react-aria-components'
import { Dialog } from '../../../dialog.jsx'
import { Button } from '../../button.jsx'
import { Calendar } from '../../calendar.jsx'
import { DateInput } from '../../date-input.jsx'
import { Popover } from '../../popover.jsx'
import { composeTailwindRenderProps } from '../../utils.mjs'
import { Description } from '../description.jsx'
import { FieldError } from '../field-error.jsx'
import { FieldGroup } from '../field-group.jsx'
import { Label } from '../label.jsx'

// export interface DatePickerProps<T extends DateValue>
//   extends AriaDatePickerProps<T> {
//   label?: string;
//   description?: string;
//   errorMessage?: string | ((validation: ValidationResult) => string);
// }

export function DatePicker({ label, description, errorMessage, ...props }) {
  return (
    <AriaDatePicker
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'group flex flex-col gap-1'
      )}
    >
      {label && <Label>{label}</Label>}
      <FieldGroup className="w-auto min-w-[208px]">
        <DateInput className="min-w-[150px] flex-1 px-2 py-1.5 text-sm" />
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
          <Calendar />
        </Dialog>
      </Popover>
    </AriaDatePicker>
  )
}

DatePicker.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  errorMessage: PropTypes.string,
}
