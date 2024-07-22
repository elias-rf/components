import PropTypes from 'prop-types'
import { Menu as AriaMenu } from 'react-aria-components'
import { Popover } from '../popover.jsx'

// interface MenuProps<T> extends AriaMenuProps<T> {
//   placement?: PopoverProps['placement']
// }

/**
 * @param {object} props
 */
export function Menu(props) {
  return (
    <Popover
      placement={props.placement}
      className="min-w-[150px]"
    >
      <AriaMenu
        {...props}
        className="max-h-[inherit] overflow-auto p-1 outline outline-0 [clip-path:inset(0_0_0_0_round_.75rem)]"
      />
    </Popover>
  )
}

Menu.propTypes = {
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
}
