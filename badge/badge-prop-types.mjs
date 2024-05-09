import PropTypes from 'prop-types'

export const BadgePropTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'secondary', 'destructive', 'outline']),
}
