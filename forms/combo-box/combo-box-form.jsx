import PropTypes from 'prop-types'
import { useController } from 'react-hook-form'
import { ComboBoxField } from './combo-box-field.jsx'

export const ComboBoxForm = ({ name, control, rules, ...props }) => {
  const ctrl = useController({ name, control, rules })

  return (
    <ComboBoxField
      name={ctrl.field.name}
      onSelectionChange={ctrl.field.onChange} // send value to hook form
      onBlur={ctrl.field.onBlur} // notify when input is touched/blurred
      label={ctrl.field.name}
      selectedKey={ctrl.field.value}
      description="descrição do campo de testes"
      errorMessage="mensagem de erro"
      {...props}
    >
      {props.children}
    </ComboBoxField>
  )
}

ComboBoxForm.propTypes = {
  name: PropTypes.string,
  control: PropTypes.any,
  rules: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.node,
}
