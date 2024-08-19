import * as Ariakit from '@ariakit/react'

export function FormError({ name, children }) {
  return (
    <Ariakit.FormError
      className="error"
      name={name}
    >
      {children}
    </Ariakit.FormError>
  )
}
