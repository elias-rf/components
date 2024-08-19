import PropTypes from 'prop-types'
import { Text } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

/**
 * @param {Object} props
 */
export function Description(props) {
  return (
    <Text
      {...props}
      slot="description"
      className={twMerge('text-sm text-gray-600', props.className)}
    />
  )
}

Description.propTypes = {
  className: PropTypes.string,
}
