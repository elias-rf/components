import { MenuButton as MenuButtonHL } from '@headlessui/react'
import PropTypes from 'prop-types'
import { cn } from '../../lib/utils.mjs'

export function MenuButton({ children, className }) {
  return (
    <MenuButtonHL className={cn('p-1 data-[active]:bg-blue-200', className)}>
      {children}
    </MenuButtonHL>
  )
}

MenuButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
