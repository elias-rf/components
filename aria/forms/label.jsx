import PropTypes from 'prop-types'
import { Label as RACLabel } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

/**
 * @param {Object} props
 */
export function Label(props) {
  return (
    <RACLabel
      {...props}
      className={twMerge(
        'w-fit cursor-default text-sm font-medium text-gray-500 dark:text-zinc-400',
        props.className
      )}
    />
  )
}

Label.propTypes = {
  className: PropTypes.string,
}
