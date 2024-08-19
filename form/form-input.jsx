import * as Ariakit from '@ariakit/react'
import PropTypes from 'prop-types'

export const FormInput = ({ name, ...props }) => {
  return (
    <Ariakit.FormInput
      name={name}
      className="input"
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
