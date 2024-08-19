import { Label as LabelHL } from '@headlessui/react'
import PropTypes from 'prop-types'
import { cn } from '../lib/utils.mjs'

export function Label({ className, children, ...props }) {
  if (!children) return null
  return (
    <LabelHL
      {...props}
      className={cn(
        'w-fit cursor-default text-sm font-medium text-gray-500 dark:text-zinc-400',
        className
      )}
    >
      {children}
    </LabelHL>
  )
}

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
