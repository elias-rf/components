import PropTypes from 'prop-types'
import { useController } from 'react-hook-form'
import { TextField } from './text-field.jsx'

/**
 * @param {{name: string, control: any, rules?: any, children: any}} props
 */
export const TextForm = ({ name, control, rules, children, ...props }) => {
  const ctrl = useController({ name, control, rules })
  return (
    <TextField
      name={ctrl.field.name}
      onChange={ctrl.field.onChange} // send value to hook form
      onBlur={ctrl.field.onBlur} // notify when input is touched/blurred
      value={ctrl.field.value}
      label={children}
      errorMessage={ctrl.fieldState.error?.message}
      {...props}
    />
  )
}

TextForm.propTypes = {
  name: PropTypes.string,
  control: PropTypes.any,
  rules: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
}
