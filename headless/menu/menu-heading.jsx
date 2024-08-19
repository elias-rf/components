import { MenuHeading as MenuHeadingHL } from '@headlessui/react'
import PropTypes from 'prop-types'

export function MenuHeading({ children }) {
  return (
    <MenuHeadingHL className="p-1 text-sm opacity-50">{children}</MenuHeadingHL>
  )
}

MenuHeading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
