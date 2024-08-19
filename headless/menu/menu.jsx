import { Menu as MenuHL } from '@headlessui/react'
import PropTypes from 'prop-types'

export function Menu({ children }) {
  return <MenuHL>{children}</MenuHL>
}

Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
