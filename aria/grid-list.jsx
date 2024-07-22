import PropTypes from 'prop-types'
import { GridList as AriaGridList } from 'react-aria-components'
import { composeTailwindRenderProps } from './utils.mjs'

export function GridList({ children, ...props }) {
  return (
    <AriaGridList
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'relative overflow-auto rounded-lg border dark:border-zinc-600'
      )}
    >
      {children}
    </AriaGridList>
  )
}

GridList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
