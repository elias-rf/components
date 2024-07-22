import { ChevronRight } from 'lucide-react'
import PropTypes from 'prop-types'
import { Breadcrumb as AriaBreadcrumb } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { Link } from '../link.jsx'

/**
 * @param {Object} props
 */
export function Breadcrumb(props) {
  return (
    <AriaBreadcrumb
      {...props}
      className={twMerge('flex items-center gap-1', props.className)}
    >
      <Link
        variant="secondary"
        {...props}
      />
      {props.href && (
        <ChevronRight className="w-3 h-3 text-gray-600 dark:text-zinc-400" />
      )}
    </AriaBreadcrumb>
  )
}

Breadcrumb.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
}
