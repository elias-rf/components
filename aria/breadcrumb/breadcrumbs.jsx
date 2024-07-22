import PropTypes from 'prop-types'
import { Breadcrumbs as AriaBreadcrumbs } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

/**
 * @param {Object} props
 */
export function Breadcrumbs(props) {
  return (
    <AriaBreadcrumbs
      {...props}
      className={twMerge('flex gap-1', props.className)}
    />
  )
}

Breadcrumbs.propTypes = {
  className: PropTypes.string,
}
