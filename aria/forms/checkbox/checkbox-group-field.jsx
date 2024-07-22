import PropTypes from 'prop-types'
import { CheckboxGroup as AriaCheckboxGroup } from 'react-aria-components'
import { composeTailwindRenderProps } from '../../utils.mjs'
import { Description } from '../description.jsx'
import { FieldError } from '../field-error.jsx'
import { Label } from '../label.jsx'

export function CheckboxGroup(props) {
  return (
    <AriaCheckboxGroup
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'flex flex-col gap-2'
      )}
    >
      <Label>{props.label}</Label>
      {props.children}
      {props.description && <Description>{props.description}</Description>}
      <FieldError>{props.errorMessage}</FieldError>
    </AriaCheckboxGroup>
  )
}

CheckboxGroup.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  errorMessage: PropTypes.string,
  children: PropTypes.node,
}
