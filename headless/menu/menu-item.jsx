import { MenuItem as MenuItemHL } from '@headlessui/react'
import PropTypes from 'prop-types'

export function MenuItem({ children, ...props }) {
  return (
    <MenuItemHL
      className="block p-1 data-[focus]:bg-blue-100"
      {...props}
    >
      {children}
    </MenuItemHL>
  )
}

MenuItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
