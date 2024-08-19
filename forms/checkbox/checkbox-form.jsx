import PropTypes from 'prop-types'
import { useController } from 'react-hook-form'
import { CheckboxField } from './checkbox-field.jsx'

export const CheckboxForm = ({ name, control, rules, ...props }) => {
  const ctrl = useController({ name, control, rules })
  return (
    <CheckboxField
      {...props}
      onChange={ctrl.field.onChange} // send value to hook form
      onBlur={ctrl.field.onBlur} // notify when input is touched/blur
      isSelected={ctrl.field.value} // input value
      name={ctrl.field.name} // send down the input name
      inputRef={ctrl.field.ref}
      className={props.className}
    >
      {props.children}
    </CheckboxField>
  )
}

CheckboxForm.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
