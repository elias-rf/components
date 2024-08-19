import { MenuSection as MenuSectionHL } from '@headlessui/react'
import PropTypes from 'prop-types'

export function MenuSection({ children }) {
  return <MenuSectionHL>{children}</MenuSectionHL>
}

MenuSection.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
