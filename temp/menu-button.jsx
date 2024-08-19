import * as Ariakit from '@ariakit/react'
import clsx from 'clsx'
import * as React from 'react'

export const MenuButton = React.forwardRef(function MenuButton(props, ref) {
  const menu = Ariakit.useMenuContext()
  return (
    <Ariakit.MenuButton
      ref={ref}
      {...props}
    >
      <span className="label">{props.children}</span>
      {!!menu?.parent && <Ariakit.MenuButtonArrow />}
    </Ariakit.MenuButton>
  )
})
