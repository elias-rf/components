import { Checkbox, Field } from '@headlessui/react'
import PropTypes from 'prop-types'
import React from 'react'
import { Description } from './description'
import { ErrorMessage } from './error-message'
import { Label } from './label'

export const CheckboxField = React.forwardRef(
  (
    {
      className,
      label,
      errorMessage,
      description,
      disabled,
      onChange,
      name,
      ...props
    },
    ref
  ) => {
    const changeHandle = (e) => {
      onChange({ target: { value: e, name } })
    }
    return (
      <Field
        className={className}
        disabled={disabled}
      >
        <Label>{label}</Label>
        <Checkbox
          ref={ref}
          onChange={changeHandle}
          name={name}
          className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500"
          {...props}
        >
          <svg
            className="stroke-white opacity-0 group-data-[checked]:opacity-100"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M3 8L6 11L11 3.5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Checkbox>
        <Description>{description}</Description>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </Field>
    )
  }
)

CheckboxField.displayName = 'CheckboxField'

CheckboxField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  description: PropTypes.string,
  disabled: PropTypes.bool,
}
