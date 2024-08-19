import { FormLabel as AriakitFormLabel } from '@ariakit/react'

export function FormLabel({ name, children }) {
  return <AriakitFormLabel name={name}>{children}</AriakitFormLabel>
}
