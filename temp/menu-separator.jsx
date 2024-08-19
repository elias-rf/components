import * as Ariakit from '@ariakit/react'
import clsx from 'clsx'
import * as React from 'react'

export const MenuSeparator = React.forwardRef(
  function MenuSeparator(props, ref) {
    return (
      <Ariakit.MenuSeparator
        ref={ref}
        {...props}
        className={clsx('separator', props.className)}
      />
    )
  }
)
