import { Cell as AriaCell } from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { focusRing } from './utils.mjs'

const cellStyles = tv({
  extend: focusRing,
  base: 'border-b dark:border-b-zinc-700 group-last/row:border-b-0 [--selected-border:theme(colors.blue.200)] dark:[--selected-border:theme(colors.blue.900)] group-selected/row:border-[--selected-border] [:has(+[data-selected])_&]:border-[--selected-border] p-2 truncate -outline-offset-2',
})

export function Cell(props) {
  return (
    <AriaCell
      {...props}
      className={cellStyles}
    />
  )
}
