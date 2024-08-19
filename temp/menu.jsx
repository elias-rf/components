import * as Ariakit from '@ariakit/react'
import clsx from 'clsx'
import * as React from 'react'

export const Menu = React.forwardRef(function Menu(props, ref) {
  const menu = Ariakit.useMenuContext()
  return (
    <Ariakit.Menu
      ref={ref}
      portal
      fitViewport
      unmountOnHide
      overlap={!!menu?.parent}
      gutter={menu?.parent ? 12 : 4}
      shift={menu?.parent ? -9 : -2}
      flip={menu?.parent ? true : 'bottom-end'}
      {...props}
      className={clsx('menu', props.className)}
    />
  )
})
