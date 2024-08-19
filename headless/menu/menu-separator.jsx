import { MenuSeparator as MenuSeparatorBase } from '@headlessui/react'
import PropTypes from 'prop-types'

export function MenuSeparator({ children }) {
  return (
    <MenuSeparatorBase className="h-px my-1 bg-black">
      {children}
    </MenuSeparatorBase>
  )
}

MenuSeparator.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
