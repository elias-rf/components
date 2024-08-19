import * as Ariakit from '@ariakit/react'

export function FormReset({ name, children }) {
  return (
    <Ariakit.FormReset
      className="button secondary reset"
      name={name}
    >
      {children}
    </Ariakit.FormReset>
  )
}
