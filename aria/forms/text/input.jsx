import PropTypes from 'prop-types'
import { Input as RACInput } from 'react-aria-components'
import { composeTailwindRenderProps } from '../../utils.mjs'

/* -------------------------------------------------------------------------- */

/**
 * @param {Object} props
 */
export function Input(props) {
  return (
    <RACInput
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'min-w-0 flex-1 bg-white px-2 py-1.5 text-sm text-gray-800 outline outline-0 disabled:text-gray-200 dark:bg-zinc-900 dark:text-zinc-200 dark:disabled:text-zinc-600'
      )}
    />
  )
}

Input.propTypes = {
  className: PropTypes.string,
}
