import PropTypes from 'prop-types'
import { useController } from 'react-hook-form'
import { TextField } from '../aria/forms/text-field.jsx'

/**
 * Form input component that renders an input field.
 *
 * @param {Object} props - Object containing name, control, rules, className, type, and other props.
 * @return {JSX.Element} Input field element.
 */
export const FormInput = ({ name, control, rules, type, ...props }) => {
  const ctrl = useController({ name, control, rules })
  return (
    <TextField
      type={type}
      {...ctrl.field}
      label={ctrl.field.name}
      description="descrição do campo de testes"
      errorMessage="mensagem de erro"
      {...props}
    />
  )
}

FormInput.propTypes = {
  name: PropTypes.string,
  control: PropTypes.any,
  rules: PropTypes.any,
  className: PropTypes.string,
  type: PropTypes.string,
}
