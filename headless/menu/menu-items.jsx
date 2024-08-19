import { MenuItems as MenuItemsHL } from '@headlessui/react'
import PropTypes from 'prop-types'
import { cn } from '../../lib/utils.mjs'

export function MenuItems({
  children,
  className,
  anchor = 'bottom',
  ...props
}) {
  return (
    <MenuItemsHL
      anchor={anchor}
      {...props}
      className={cn('border border-gray-300', className)}
    >
      {children}
    </MenuItemsHL>
  )
}

MenuItems.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  anchor: PropTypes.string,
}
