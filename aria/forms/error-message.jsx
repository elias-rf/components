import PropTypes from 'prop-types'
import { cn } from '../../lib/utils.mjs'

/**
 * @param {Object} props
 */
export function ErrorMessage(props) {
  if (!props.children) return null
  return (
    <div
      {...props}
      className={cn(
        props.className,
        'text-sm text-red-600 forced-colors:text-[Mark]'
      )}
    >
      {props.children}
    </div>
  )
}

ErrorMessage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
