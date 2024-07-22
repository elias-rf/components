import PropTypes from 'prop-types'
import { FieldError as RACFieldError } from 'react-aria-components'
import { composeTailwindRenderProps } from '../utils.mjs'

/**
 * @param {Object} props
 */
export function FieldError(props) {
  return (
    <RACFieldError
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'text-sm text-red-600 forced-colors:text-[Mark]'
      )}
    />
  )
}

FieldError.propTypes = {
  className: PropTypes.string,
}
