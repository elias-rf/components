import * as Ariakit from '@ariakit/react'
import clsx from 'clsx'
import * as React from 'react'

export const MenuItem = React.forwardRef(function MenuItem(props, ref) {
  return (
    <Ariakit.MenuItem
      ref={ref}
      {...props}
      className={clsx('menu-item', props.className)}
    />
  )
})
