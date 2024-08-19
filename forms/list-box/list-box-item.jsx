import {
  ListBoxItem as AriaListBoxItem,
  composeRenderProps,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { focusRing } from '../../utils.mjs'

export const itemStyles = tv({
  extend: focusRing,
  base: 'group relative flex items-center gap-8 cursor-default select-none py-1.5 px-2.5 rounded-md will-change-transform text-sm forced-color-adjust-none',
  variants: {
    isSelected: {
      false:
        'text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-700 -outline-offset-2',
      true: 'bg-blue-600 text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] [&:has(+[data-selected])]:rounded-b-none [&+[data-selected]]:rounded-t-none -outline-offset-4 outline-white dark:outline-white forced-colors:outline-[HighlightText]',
    },
    isDisabled: {
      true: 'text-slate-300 dark:text-zinc-600 forced-colors:text-[GrayText]',
    },
  },
})

export function ListBoxItem(props) {
  let textValue =
    props.textValue ||
    (typeof props.children === 'string' ? props.children : undefined)
  return (
    <AriaListBoxItem
      {...props}
      textValue={textValue}
      className={itemStyles}
    >
      {composeRenderProps(props.children, (children) => (
        <>
          {children}
          <div className="absolute bottom-0 left-4 right-4 hidden h-px bg-white/20 forced-colors:bg-[HighlightText] [.group[data-selected]:has(+[data-selected])_&]:block" />
        </>
      ))}
    </AriaListBoxItem>
  )
}
