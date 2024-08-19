import { Description as DescriptionHL } from '@headlessui/react'
import PropTypes from 'prop-types'
import { cn } from '../lib/utils.mjs'

export function Description({ className, children, ...props }) {
  if (!children) return null
  return (
    <DescriptionHL
      {...props}
      className={cn('text-sm text-gray-600', className)}
    >
      {children}
    </DescriptionHL>
  )
}

Description.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
