import { TimeField as AriaTimeField } from 'react-aria-components'
import { DateInput } from '../date-input.jsx'
import { Description } from './description.jsx'
import { FieldError } from './field-error.jsx'
import { Label } from './label.jsx'

// export interface TimeFieldProps<T extends TimeValue>
//   extends AriaTimeFieldProps<T> {
//   label?: string;
//   description?: string;
//   errorMessage?: string | ((validation: ValidationResult) => string);
// }

export function TimeField({ label, description, errorMessage, ...props }) {
  return (
    <AriaTimeField {...props}>
      <Label>{label}</Label>
      <DateInput />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaTimeField>
  )
}
