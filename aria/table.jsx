import { ArrowUp } from 'lucide-react'
import {
  Column as AriaColumn,
  Table as AriaTable,
  TableHeader as AriaTableHeader,
  Collection,
  ColumnResizer,
  Group,
  ResizableTableContainer,
  composeRenderProps,
  useTableOptions,
} from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'
import { Checkbox } from './forms/checkbox/checkbox.jsx'
import { composeTailwindRenderProps, focusRing } from './utils.mjs'

export function Table(props) {
  return (
    <ResizableTableContainer className="relative max-h-[280px] w-[550px] scroll-pt-[2.281rem] overflow-auto rounded-lg border dark:border-zinc-600">
      <AriaTable
        {...props}
        className="border-separate border-spacing-0"
      />
    </ResizableTableContainer>
  )
}

const columnStyles = tv({
  extend: focusRing,
  base: 'px-2 h-5 flex-1 flex gap-1 items-center overflow-hidden',
})

const resizerStyles = tv({
  extend: focusRing,
  base: 'w-px px-[8px] translate-x-[8px] box-content py-1 h-5 bg-clip-content bg-gray-400 dark:bg-zinc-500 forced-colors:bg-[ButtonBorder] cursor-col-resize rounded resizing:bg-blue-600 forced-colors:resizing:bg-[Highlight] resizing:w-[2px] resizing:pl-[7px] -outline-offset-2',
})

export function Column(props) {
  return (
    <AriaColumn
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'cursor-default text-start text-sm font-semibold text-gray-700 dark:text-zinc-300 [&:focus-within]:z-20 [&:hover]:z-20'
      )}
    >
      {composeRenderProps(
        props.children,
        (children, { allowsSorting, sortDirection }) => (
          <div className="flex items-center">
            <Group
              role="presentation"
              tabIndex={-1}
              className={columnStyles}
            >
              <span className="truncate">{children}</span>
              {allowsSorting && (
                <span
                  className={`flex h-4 w-4 items-center justify-center transition ${
                    sortDirection === 'descending' ? 'rotate-180' : ''
                  }`}
                >
                  {sortDirection && (
                    <ArrowUp
                      aria-hidden
                      className="h-4 w-4 text-gray-500 dark:text-zinc-400 forced-colors:text-[ButtonText]"
                    />
                  )}
                </span>
              )}
            </Group>
            {!props.width && <ColumnResizer className={resizerStyles} />}
          </div>
        )
      )}
    </AriaColumn>
  )
}

export function TableHeader(props) {
  let { selectionBehavior, selectionMode, allowsDragging } = useTableOptions()

  return (
    <AriaTableHeader
      {...props}
      className={twMerge(
        'sticky top-0 z-10 rounded-t-lg border-b bg-gray-100/60 backdrop-blur-md supports-[-moz-appearance:none]:bg-gray-100 dark:border-b-zinc-700 dark:bg-zinc-700/60 dark:supports-[-moz-appearance:none]:bg-zinc-700 forced-colors:bg-[Canvas]',
        props.className
      )}
    >
      {/* Add extra columns for drag and drop and selection. */}
      {allowsDragging && <Column />}
      {selectionBehavior === 'toggle' && (
        <AriaColumn
          width={36}
          minWidth={36}
          className="cursor-default p-2 text-start text-sm font-semibold"
        >
          {selectionMode === 'multiple' && <Checkbox slot="selection" />}
        </AriaColumn>
      )}
      <Collection items={props.columns}>{props.children}</Collection>
    </AriaTableHeader>
  )
}
