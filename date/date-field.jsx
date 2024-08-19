import PropTypes from 'prop-types'
import { DateField as AriaDateField } from 'react-aria-components'
import { DateInput } from '../../date-input.jsx'
import { Description } from '../description.jsx'
import { FieldError } from '../field-error.jsx'
import { Label } from '../label.jsx'
import { composeTailwindRenderProps } from '../utils.mjs'

// export interface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T> {
//   label?: string;
//   description?: string;
//   errorMessage?: string | ((validation: ValidationResult) => string);
// }

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {string} [props.label]
 * @param {string} [props.description]
 * @param {string} [props.errorMessage]
 * @param {boolean} [props.isRequired]
 */
export function DateField({ label, description, errorMessage, ...props }) {
  return (
    <AriaDateField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'flex flex-col gap-1'
      )}
    >
      {label && <Label>{label}</Label>}
      <DateInput />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaDateField>
  )
}

DateField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  errorMessage: PropTypes.string,
  children: PropTypes.node,
  isRequired: PropTypes.bool,
}
