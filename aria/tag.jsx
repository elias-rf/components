import { XIcon } from 'lucide-react'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import {
  Tag as AriaTag,
  Button,
  composeRenderProps,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { ColorContext } from './forms/tag-group.jsx'
import { focusRing } from './utils.mjs'

const tagStyles = tv({
  extend: focusRing,
  base: 'transition cursor-default text-xs rounded-full border px-3 py-0.5 flex items-center max-w-fit gap-1',
  variants: {
    color: {
      gray: '',
      green: '',
      yellow: '',
      blue: '',
    },
    allowsRemoving: {
      true: 'pr-1',
    },
    isSelected: {
      true: 'bg-blue-600 text-white border-transparent forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] forced-color-adjust-none',
    },
    isDisabled: {
      true: 'bg-gray-100 text-gray-300 forced-colors:text-[GrayText]',
    },
  },
  compoundVariants: [
    {
      isSelected: false,
      color: 'gray',
      class:
        'bg-gray-100 text-gray-600 border-gray-200 hover:border-gray-300 dark:bg-zinc-700 dark:text-zinc-300 dark:border-zinc-600 dark:hover:border-zinc-500',
    },
    {
      isSelected: false,
      color: 'green',
      class:
        'bg-green-100 text-green-700 border-green-200 hover:border-green-300 dark:bg-green-300/20 dark:text-green-400 dark:border-green-300/10 dark:hover:border-green-300/20',
    },
    {
      isSelected: false,
      color: 'yellow',
      class:
        'bg-yellow-100 text-yellow-700 border-yellow-200 hover:border-yellow-300 dark:bg-yellow-300/20 dark:text-yellow-400 dark:border-yellow-300/10 dark:hover:border-yellow-300/20',
    },
    {
      isSelected: false,
      color: 'blue',
      class:
        'bg-blue-100 text-blue-700 border-blue-200 hover:border-blue-300 dark:bg-blue-400/20 dark:text-blue-300 dark:border-blue-400/10 dark:hover:border-blue-400/20',
    },
  ],
})

const removeButtonStyles = tv({
  extend: focusRing,
  base: 'cursor-default rounded-full transition-[background-color] p-0.5 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 pressed:bg-black/20 dark:pressed:bg-white/20',
})

/**
 *
 * @param {object} props
 * @returns
 */
export function Tag({ children, color, ...props }) {
  let textValue = typeof children === 'string' ? children : undefined
  let groupColor = useContext(ColorContext)
  return (
    <AriaTag
      textValue={textValue}
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tagStyles({ ...renderProps, className, color: color || groupColor })
      )}
    >
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && (
            <Button
              slot="remove"
              className={removeButtonStyles}
            >
              <XIcon
                aria-hidden
                className="h-3 w-3"
              />
            </Button>
          )}
        </>
      )}
    </AriaTag>
  )
}

Tag.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  className: PropTypes.string,
}
