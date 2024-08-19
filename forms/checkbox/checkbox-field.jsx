import PropTypes from 'prop-types'
import { composeTailwindRenderProps } from '../../utils.mjs'
import { Description } from '../description.jsx'
import { ErrorMessage } from '../error-message.jsx'
import { Checkbox } from './checkbox.jsx'

export function CheckboxField(props) {
  return (
    <>
      <Checkbox
        {...props}
        className={props.className}
      >
        {props.children}
      </Checkbox>
      {props.description && <Description>{props.description}</Description>}
      <ErrorMessage>{props.errorMessage}</ErrorMessage>
    </>
  )
}

CheckboxField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  errorMessage: PropTypes.string,
  children: PropTypes.node,
}
