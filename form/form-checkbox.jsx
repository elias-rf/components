import * as Ariakit from '@ariakit/react'
import PropTypes from 'prop-types'

/**
 * @param {Object} props
 */
export const FormCheckbox = ({ name, ...props }) => {
  return (
    <>
      <Ariakit.FormCheckbox
        name={name}
        {...props}
      ></Ariakit.FormCheckbox>
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
