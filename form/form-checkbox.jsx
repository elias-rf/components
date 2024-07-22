import PropTypes from 'prop-types'
import { useController } from 'react-hook-form'
import { Checkbox } from '../aria/forms/checkbox/checkbox.jsx'
import { Description } from '../aria/forms/description.jsx'
import { FieldError } from '../aria/forms/field-error.jsx'

/**
 * @param {Object} props
 */
export const FormCheckbox = ({ name, control, rules, ...props }) => {
  const ctrl = useController({ name, control, rules })
  return (
    <>
      <Checkbox
        onChange={ctrl.field.onChange}
        onBlur={ctrl.field.onBlur}
        checked={ctrl.field.value}
        name={ctrl.field.name}
        isSelected={ctrl.field.value}
        ref={ctrl.field.ref}
        {...props}
      >
        {ctrl.field.name}
      </Checkbox>
      {props.description && <Description>{props.description}</Description>}
      <FieldError>{props.errorMessage}</FieldError>{' '}
    </>
  )
}

FormCheckbox.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  description: PropTypes.string,
  errorMessage: PropTypes.string,
  control: PropTypes.any,
  rules: PropTypes.any,
}
