import PropTypes from 'prop-types'
import { TextField as AriaTextField } from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { composeTailwindRenderProps, focusRing } from '../../utils.mjs'
import { Description } from '../description.jsx'
import { ErrorMessage } from '../error-message.jsx'
import { Label } from '../label.jsx'
import { Input } from './input.jsx'

export const fieldBorderStyles = tv({
  variants: {
    isFocusWithin: {
      false:
        'border-gray-300 dark:border-zinc-500 forced-colors:border-[ButtonBorder]',
      true: 'border-gray-600 dark:border-zinc-300 forced-colors:border-[Highlight]',
    },
    isInvalid: {
      true: 'border-red-600 dark:border-red-600 forced-colors:border-[Mark]',
    },
    isDisabled: {
      true: 'border-gray-200 dark:border-zinc-700 forced-colors:border-[GrayText]',
    },
  },
})

const inputStyles = tv({
  extend: focusRing,
  base: 'rounded-md border-2',
  variants: {
    isFocused: fieldBorderStyles.variants.isFocusWithin,
    ...fieldBorderStyles.variants,
  },
})

// export interface TextFieldProps extends AriaTextFieldProps {
//   label?: string;
//   description?: string;
//   errorMessage?: string | ((validation: ValidationResult) => string);
// }

/**
 * @param {Object} args
 */
export function TextField({ label, description, errorMessage, ...props }) {
  return (
    <AriaTextField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'flex flex-col gap-1'
      )}
    >
      {label && <Label>{label}</Label>}
      <Input className={inputStyles(props)} />
      {description && <Description>{description}</Description>}
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </AriaTextField>
  )
}

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  errorMessage: PropTypes.string,
  className: PropTypes.string,
  isRequired: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
}
