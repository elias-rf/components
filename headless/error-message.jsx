import PropTypes from 'prop-types'
import { cn } from '../lib/utils.mjs'

export function ErrorMessage({ className, children, ...props }) {
  if (!children) return null
  return (
    <p
      {...props}
      className={cn(
        className,
        'text-sm text-red-600 forced-colors:text-[Mark]'
      )}
    >
      {children}
    </p>
  )
}

ErrorMessage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
