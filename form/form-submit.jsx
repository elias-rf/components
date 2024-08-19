import * as Ariakit from '@ariakit/react'

export function FormSubmit({ name, children }) {
  return (
    <Ariakit.FormSubmit
      className="button"
      name={name}
    >
      {children}
    </Ariakit.FormSubmit>
  )
}
