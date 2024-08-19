import { Check, ChevronRight } from 'lucide-react'
import PropTypes from 'prop-types'
import {
  MenuItem as AriaMenuItem,
  composeRenderProps,
} from 'react-aria-components'
import { dropdownItemStyles } from '../forms/dropdown/dropdown-item.jsx'

export function MenuItem(props) {
  return (
    <AriaMenuItem
      {...props}
      className={dropdownItemStyles}
    >
      {composeRenderProps(
        props.children,
        (children, { selectionMode, isSelected, hasSubmenu }) => (
          <>
            {selectionMode !== 'none' && (
              <span className="flex w-4 items-center">
                {isSelected && (
                  <Check
                    aria-hidden
                    className="h-4 w-4"
                  />
                )}
              </span>
            )}
            <span className="flex flex-1 items-center gap-2 truncate font-normal group-selected:font-semibold">
              {children}
            </span>
            {hasSubmenu && (
              <ChevronRight
                aria-hidden
                className="absolute right-2 h-4 w-4"
              />
            )}
          </>
        )
      )}
    </AriaMenuItem>
  )
}

MenuItem.propTypes = {
  selectionMode: PropTypes.oneOf(['none', 'single', 'multiple']),
  isSelected: PropTypes.bool,
  hasSubmenu: PropTypes.bool,
  children: PropTypes.node,
  id: PropTypes.string,
}
