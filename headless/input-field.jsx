import { Field, Input } from '@headlessui/react'
import PropTypes from 'prop-types'
import React from 'react'
import { Description } from './description'
import { ErrorMessage } from './error-message'
import { Label } from './label'

export const InputField = React.forwardRef(
  (
    { className, label, errorMessage, description, disabled, ...props },
    ref
  ) => {
    return (
      <Field
        className={className}
        disabled={disabled}
      >
        <Label>{label}</Label>
        <Input
          className="flex w-full h-8 px-2 py-1 text-sm transition-colors bg-transparent border rounded-md shadow-sm border-slate-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
          ref={ref}
          {...props}
        />
        <Description>{description}</Description>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </Field>
    )
  }
)

InputField.displayName = 'InputField'

InputField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  description: PropTypes.string,
  disabled: PropTypes.bool,
}
