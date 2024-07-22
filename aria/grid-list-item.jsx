import PropTypes from 'prop-types'
import { GridListItem as AriaGridListItem, Button } from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { Checkbox } from './forms/checkbox/checkbox.jsx'
import { focusRing } from './utils.mjs'

const itemStyles = tv({
  extend: focusRing,
  base: 'relative flex gap-3 cursor-default select-none py-2 px-3 text-sm text-gray-900 dark:text-zinc-200 border-y dark:border-y-zinc-700 border-transparent first:border-t-0 last:border-b-0 first:rounded-t-md last:rounded-b-md -mb-px last:mb-0 -outline-offset-2',
  variants: {
    isSelected: {
      false: 'hover:bg-gray-100 dark:hover:bg-zinc-700/60',
      true: 'bg-blue-100 dark:bg-blue-700/30 hover:bg-blue-200 dark:hover:bg-blue-700/40 border-y-blue-200 dark:border-y-blue-900 z-20',
    },
    isDisabled: {
      true: 'text-slate-300 dark:text-zinc-600 forced-colors:text-[GrayText] z-10',
    },
  },
})

export function GridListItem({ children, ...props }) {
  let textValue = typeof children === 'string' ? children : undefined
  return (
    <AriaGridListItem
      textValue={textValue}
      {...props}
      className={itemStyles}
    >
      {({ selectionMode, selectionBehavior, allowsDragging }) => (
        <>
          {/* Add elements for drag and drop and selection. */}
          {allowsDragging && <Button slot="drag">≡</Button>}
          {selectionMode === 'multiple' && selectionBehavior === 'toggle' && (
            <Checkbox slot="selection" />
          )}
          {children}
        </>
      )}
    </AriaGridListItem>
  )
}

GridListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
