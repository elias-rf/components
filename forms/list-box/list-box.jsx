import { ListBox as AriaListBox } from 'react-aria-components'
import { composeTailwindRenderProps } from '../../utils.mjs'

// interface ListBoxProps<T> extends Omit<AriaListBoxProps<T>, 'layout' | 'orientation'> {}

export function ListBox({ children, ...props }) {
  return (
    <AriaListBox
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'rounded-lg border border-gray-300 p-1 outline-0 dark:border-zinc-600'
      )}
    >
      {children}
    </AriaListBox>
  )
}
