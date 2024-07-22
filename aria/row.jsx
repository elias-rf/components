import PropTypes from 'prop-types'
import {
  Row as AriaRow,
  Button,
  Collection,
  useTableOptions,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { Cell } from './cell.jsx'
import { Checkbox } from './forms/checkbox/checkbox.jsx'
import { focusRing } from './utils.mjs'

const rowStyles = tv({
  extend: focusRing,
  base: 'group/row relative cursor-default select-none -outline-offset-2 text-gray-900 disabled:text-gray-300 dark:text-zinc-200 dark:disabled:text-zinc-600 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700/60 selected:bg-blue-100 selected:hover:bg-blue-200 dark:selected:bg-blue-700/30 dark:selected:hover:bg-blue-700/40',
})

/**
 * @param {Object} props
 */
export function Row({ id, columns, children, ...otherProps }) {
  let { selectionBehavior, allowsDragging } = useTableOptions()

  return (
    <AriaRow
      id={id}
      {...otherProps}
      className={rowStyles}
    >
      {allowsDragging && (
        <Cell>
          <Button slot="drag">≡</Button>
        </Cell>
      )}
      {selectionBehavior === 'toggle' && (
        <Cell>
          <Checkbox slot="selection" />
        </Cell>
      )}
      <Collection items={columns}>{children}</Collection>
    </AriaRow>
  )
}

Row.propTypes = {
  id: PropTypes.string,
  columns: PropTypes.array,
  children: PropTypes.arrayOf(PropTypes.node),
}
